<script lang="ts">
	// Customize the number of lines for each box to fit the page perfectly
	const priorityLines = new Array(4); // Top-left box with checkboxes
	const leftMiddleLines = new Array(6); // Middle-left box
	const todoLines = new Array(16); // Tall right box for to-dos
	const bottomLines = new Array(4); // Wide bottom box
</script>

<div class="modular-planner-layout">
	<header>
		<h1 class="month-title">june 2026</h1>
		<span class="todos-title">to-dos</span>
	</header>

	<div class="main-content">
		<div class="columns-wrapper">
			<div class="left-col">
				<div class="box priorities-box">
					{#each priorityLines as _}
						<div class="row todo-row">
							<div class="circle subtle-circle"></div>
							<div class="line solid"></div>
						</div>
					{/each}
				</div>

				<div class="box middle-box">
					{#each leftMiddleLines as _}
						<div class="row">
							<div class="line solid"></div>
						</div>
					{/each}
				</div>
			</div>

			<div class="right-col">
				<div class="box todos-box">
					{#each todoLines as _}
						<div class="row todo-row">
							<div class="circle"></div>
							<div class="line solid"></div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="bottom-area">
			<div class="box full-width-box">
				{#each bottomLines as _}
					<div class="row">
						<div class="line solid"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	/* --- Main Layout --- */
	.modular-planner-layout {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 1.5rem 2rem;
		box-sizing: border-box;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 0.5rem;
		padding-right: 20%; /* Pushes the "to-dos" title roughly over the right column */
	}

	.month-title {
		font-size: 1.5rem;
		font-weight: 300; /* Thin, elegant font weight like the photo */
		margin: 0;
		color: var(--text, #333);
	}

	.todos-title {
		font-size: 0.8rem;
		font-weight: 400;
		color: var(--text-low, #777);
	}

	.main-content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: 1rem; /* Spacing between the columns area and the bottom box */
	}

	/* --- Columns Split --- */
	.columns-wrapper {
		display: flex;
		gap: 1rem; /* Spacing between left and right columns */
		flex-grow: 1; /* Stretches to fill available space above the bottom box */
	}

	.left-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem; /* Spacing between the two left boxes */
	}

	.right-col {
		flex: 1.2; /* Slightly wider than the left column, based on the image proportions */
		display: flex;
		flex-direction: column;
	}

	/* --- Box Styles --- */
	.box {
		border: 1px solid var(--outline, #ccc);
		border-radius: 6px; /* Soft rounded corners */
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		box-sizing: border-box;
	}

	.priorities-box {
		flex: 1; /* Takes up proportional space in the left column */
	}

	.middle-box {
		flex: 1.5; /* Slightly taller than the priorities box */
		justify-content: space-evenly;
	}

	.todos-box {
		flex-grow: 1; /* Stretches the full height of the right column */
		justify-content: space-evenly;
	}

	.bottom-area {
		flex-grow: 0;
		height: 20%; /* Restricts the bottom box to about 20% of the total page height */
		display: flex;
	}

	.full-width-box {
		flex-grow: 1;
		justify-content: space-evenly;
	}

	/* --- Rows and Lines --- */
	.row {
		display: flex;
		align-items: flex-end;
		min-height: 1.5rem;
		flex-grow: 1; /* Allows rows to stretch evenly within their boxes */
	}

	.todo-row {
		gap: 0.75rem;
	}

	.line.solid {
		flex-grow: 1;
		border-bottom: 1px solid var(--outline-faint, #e0e0e0);
		margin-bottom: 0.2rem;
	}

	/* --- Checkbox Circles --- */
	.circle {
		width: 0.75rem;
		height: 0.75rem;
		border: 1px solid var(--outline, #b0b0b0);
		border-radius: 50%;
		margin-bottom: 0.15rem;
	}

	.subtle-circle {
		/* The top left box in the photo has very subtle, colored checkboxes */
		border-color: #e6dca8; /* Soft golden/tan color */
		background-color: #fdfaf0;
	}
</style>
