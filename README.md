[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/brianschwabauer)

# Remarkably Organized Planner

A web app for generating customizable planners designed for e-ink tablets like the Remarkable 2.

![Remarkably Organized Planner](./static/remarkably-organized-cover-photo.jpg)

Use the "settings" modal to change the planner's content & design. The preview of the pdf should be generated live.

The current settings are saved in the URL so a particular planner can be shared easily. Just copy the URL and share with others!

## Exporting to PDF

To get the PDF of the generated planner, use the built in print-to-pdf functionality of Chrome. Make sure "Background Graphics" is enabled.

If the selected settings makes a very large PDF, you might have to use a powerful computer to generate the PDF. It can require a decent amount of memory in Chrome for large PDFs.

![Remarkably Organized Print Instructions](./static/remarkably-organized-print-instructions.jpg)

## Development Environment

The web app is built using the Svelte framework.
Knowledge of web technologies is required to run this app.
If you don't know what pnpm is, you probably won't understand the code.

Install pnpm, and run the following:

```bash
pnpm i
pnpm run dev
```

This will open up locahost:5173 where the actions can be viewed and tested.

It uses Svelte & Vite under the hood for automatic HMR.

To build the code run,

```bash
pnpm run build
```

### Develope in a Dev Containers (Recommended)

If you've never used a Dev Container before, it is simply a way to run a pre-configured, isolated development environment directly inside Visual Studio Code. You don't need to install Node, `pnpm`, or configure formatting tools on your local machine—the container handles it all automatically!

**Prerequisites:**

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and make sure it is running.
2. Install [Visual Studio Code](https://code.visualstudio.com/).
3. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in VS Code.

**How to start:**

1. Open this repository's folder in VS Code.
2. A prompt will appear in the bottom right corner asking to **"Reopen in Container"**. Click it. _(If you don't see it, open the Command Palette with `Ctrl/Cmd + Shift + P`, type `Dev Containers: Reopen in Container`, and hit Enter)._
3. Wait a moment for VS Code to build the container and install the project dependencies.
4. Once it's ready, open a new terminal in VS Code and run:
   ```bash
   pnpm run dev
   ```

## Future Ideas

### Auto linking "Today" button

In the future, there could be a script that runs every day that updates the pdf so that all links to /today would be converted to the actual date (like /2024-1-1).

That way you could always click on a "Today" button to take you to the right page.

Here's a sample command. This command just needs to be run every day once a day.

```bash
 sed -i 's/OLD_TEXT/NEW_TEXT/g' PDF_NAME.pdf
 sed -i 's/\/today/\/2024-1-1/g' PDF_NAME.pdf
```

### Insert events from ICS file

Add an input to add a link to a public ICS file that could pull in events into the calendar.

## Development

### How to Add a New Page Template

Adding a new page template (like a custom daily agenda, a new dotted grid, or a tracker) requires updating a few different files across the codebase so the Svelte app knows it exists, how to render it, and how to display it in the settings menu.

Follow these 4 steps to add a new template:

#### Step 1: Create the Template Component

Create a new Svelte file for your template inside the components folder (e.g., `src/lib/components/MyCustomTemplate.svelte`).

This component will receive the timeframe and settings as props. Use CSS Grid or Flexbox to lay out the page, keeping in mind that e-ink tablets require precise sizing.

```svelte
<script lang="ts">
	import type { Day, PlannerSettings } from '$lib';

	let { day = {} as Day, settings = {} as PlannerSettings } = $props();
</script>

<div class="my-custom-layout"></div>

<style lang="scss">
	.my-custom-layout {
		display: flex;
		width: 100%;
		height: 100%;
	}
</style>
```

#### Step 2: Add the Template ID to the Global Types

Before you can use your new template, you must add its unique string ID to the global TypeScript definitions so the compiler allows it.

Open `src/lib/state/collection.ts`, locate the `PageTemplate` type definition, and add your unique string to the list:

```typescript
export type PageTemplate =
	| 'blank'
	// ... other templates ...
	| 'agenda-day'
	| 'my-custom-template' // <-- Add your new template ID here
	| 'habit-year-by-month';
```

#### Step 3: Add it to the Settings UI Dropdown

To allow users to select your new template, you need to add it to the settings menu array.

Open `src/routes/planner/+page.svelte` and locate the array that populates the dropdown options for the relevant page type (e.g., day templates, week templates). Add a new object with the display `name` and your exact `value` ID:

```javascript
// Inside src/routes/planner/+page.svelte
{ name: 'Agenda - Daily', value: 'agenda-day' },
{ name: 'My Custom Template', value: 'my-custom-template' }, // <-- Add this
```

#### Step 4: Render the Template in `Page.svelte`

Finally, you need to tell the main `Page.svelte` component to render your new file when the user selects it from the dropdown.

Open `src/lib/components/Page.svelte`, import your new file at the top, and add it to the conditional rendering block:

```svelte
<script lang="ts">
	import MyCustomTemplate from './MyCustomTemplate.svelte';
	// ... other imports
</script>

<div class="page {display.split('-')[0]}">
	{#if display === 'agenda-day'}
		<AgendaDay />
	{:else if display === 'my-custom-template'}
		<MyCustomTemplate />
	{/if}
</div>
```

**Note on Styling:** The wrapper `<div class="page ...">` automatically applies a CSS class based on the first word of your template's ID (e.g., `my-custom-template` applies the `.my` class). If your template needs specific padding, scroll to the `<style>` block at the bottom of `Page.svelte` and add your prefix class there:

```scss
&.agenda,
&.my {
	padding: 0 0 1rem;
}
```
