<script lang="ts">
	// Generate hours from 6 AM to 7 PM to match the image precisely
	const startHour = 6;
	const endHour = 19;
	const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => {
		const h = i + startHour;
		return h > 12 ? `${h - 12}PM` : h === 12 ? '12PM' : `${h}AM`;
	});

	const todoLines = new Array(10);
</script>

<div class="agenda-todo-layout">
	<div class="columns-wrapper">
		<div class="schedule-column">
			<div class="header-line schedule-line"></div>

			{#each hours as time}
				<div class="time-block">
					<div class="row label-row">
						<span class="label shifted-text">{time}</span>
						<div class="line dotted"></div>
					</div>
					<div class="row">
						<span class="label empty"></span>
						<div class="line solid"></div>
					</div>
				</div>
			{/each}
		</div>

		<div class="todo-column">
			<div class="header-line todo-line"></div>

			<div class="todo-header">TO-DO</div>

			<div class="todo-items-list-container">
				{#each todoLines as _}
					<div class="row todo-row">
						<div class="circle"></div>
						<div class="line solid"></div>
					</div>
				{/each}
			</div>

			<div class="empty-notes-area"></div>
		</div>
	</div>
</div>

<style lang="scss">
	/* ... (keep all your existing layout styles exactly the same) ... */

	.agenda-todo-layout {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 1rem 1rem;
	}

	.columns-wrapper {
		display: flex;
		gap: 0;
		width: 100%;
		height: 100%;
	}

	.schedule-column,
	.todo-column {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.schedule-column {
		padding-right: 2rem;
		border-right: 1px solid var(--outline-faint, #d0d0d0);
	}
	.todo-column {
		padding-left: 2rem;
	}

	.header-line {
		height: 3px;
		width: 100%;
		margin-bottom: 0.5rem;
	}
	.schedule-line,
	.todo-line {
		background-color: #65a793;
	}

	.row {
		display: flex;
		align-items: flex-end;
		flex-grow: 1;
		min-height: 1.25rem;
	}

	.line {
		flex-grow: 1;
		margin-bottom: 0.2rem;
	}
	.solid {
		border-bottom: 1px solid var(--outline, #b0b0b0);
	}
	.dotted {
		border-bottom: 2px dotted var(--outline, #b0b0b0);
	}

	.time-block {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.label {
		width: 3rem;
		font-size: 0.65em;
		font-weight: 500;
		color: var(--text-low, #555);
		letter-spacing: 0.05em;
	}

	/* --- SHIFTED TEXT MODIFICATION --- */
	.shifted-text {
		/* Use translateY to move the text up independently of the row flexbox */
		/* Negative values move it UP. Adjust -0.5rem to be more or less as needed */
		transform: translateY(-1rem);
	}

	/* ... (keep your existing to-do styles) ... */

	.todo-header {
		font-size: 0.85em;
		font-weight: 600;
		letter-spacing: 0.05em;
		color: var(--text-low, #555);
		margin-bottom: 0.25rem;
		text-transform: uppercase;
		flex-grow: 0;
	}

	.todo-items-list-container {
		height: 40%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-around;
		flex-grow: 0;
	}

	.todo-row {
		gap: 0.75rem;
	}

	.circle {
		width: 0.6rem;
		height: 0.6rem;
		border: 1px solid var(--outline, #b0b0b0);
		border-radius: 50%;
		margin-bottom: 0.15rem;
	}

	.empty-notes-area {
		flex-grow: 1;
		width: 100%;
	}
</style>
