<script lang="ts">
	// Schedule from 5 am to 10 pm
	const hours = [
		'5 am',
		'6 am',
		'7 am',
		'8 am',
		'9 am',
		'10 am',
		'11 am',
		'12 pm',
		'1 pm',
		'2 pm',
		'3 pm',
		'4 pm',
		'5 pm',
		'6 pm',
		'7 pm',
		'8 pm',
		'9 pm',
		'10 pm',
	];

	// Arrays to generate the right amount of lines for the other sections
	const taskLines = new Array(10);
	const apptLines = new Array(6);
	const notesLines = new Array(5);
</script>

<div class="block-planner-layout">
	<div class="top-split">
		<div class="left-column">
			<div class="block-header schedule-header">Schedule</div>

			<div class="list-container schedule-list">
				{#each hours as time}
					<div class="row time-row">
						<span class="label">{time}</span>
						<div class="line solid"></div>
					</div>
				{/each}
			</div>
		</div>

		<div class="right-column">
			<div class="section">
				<div class="block-header task-header">Task</div>
				<div class="list-container task-list">
					{#each taskLines as _}
						<div class="row task-row">
							<div class="circle"></div>
							<div class="line solid"></div>
						</div>
					{/each}
				</div>
			</div>

			<div class="section appt-section">
				<div class="block-header appt-header">Appointments</div>
				<div class="list-container appt-list">
					{#each apptLines as _}
						<div class="row">
							<div class="line solid"></div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="bottom-section">
		<div class="block-header notes-header">Notes</div>

		<div class="list-container notes-list">
			{#each notesLines as _}
				<div class="row">
					<div class="line solid"></div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	/* --- Main Layout --- */
	.block-planner-layout {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 1rem 1.5rem;
		box-sizing: border-box;
		font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif; /* Friendly handwritten vibe */
	}

	.top-split {
		display: flex;
		gap: 2rem;
		flex-grow: 1; /* Takes up the majority of the page */
		margin-bottom: 1.5rem;
	}

	.left-column,
	.right-column {
		flex: 1; /* Perfect 50/50 split */
		display: flex;
		flex-direction: column;
	}

	.right-column {
		gap: 1.5rem; /* Space between Task and Appointments */
	}

	.section {
		display: flex;
		flex-direction: column;
	}

	.appt-section {
		flex-grow: 1; /* Pushes the bottom of appointments to match the schedule */
	}

	.bottom-section {
		display: flex;
		flex-direction: column;
		flex-grow: 0;
		height: 20%; /* Restricts Notes to the bottom 20% of the page */
	}

	/* --- Block Headers (Matching the Colors) --- */
	.block-header {
		text-align: center;
		font-size: 1.1rem;
		font-weight: 500;
		padding: 0.4rem 0;
		margin-bottom: 0.5rem;
		border-radius: 4px;
		color: #000;
	}

	.schedule-header {
		background-color: #dcedc8; /* Soft Green */
	}
	.task-header {
		background-color: #f8bbd0; /* Soft Pink */
	}
	.appt-header {
		background-color: #b3e5fc; /* Soft Blue */
	}
	.notes-header {
		background-color: #ffe082; /* Soft Orange/Yellow */
	}

	/* --- Common Rows & Lines --- */
	.list-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: space-between;
	}

	.row {
		display: flex;
		align-items: flex-end;
		flex-grow: 1;
		min-height: 1.5rem;
	}

	.line.solid {
		flex-grow: 1;
		border-bottom: 1px solid var(--outline, #999);
		margin-bottom: 0.2rem;
	}

	/* --- Schedule Styles --- */
	.time-row {
		gap: 0.5rem;
	}

	.label {
		width: 3rem;
		font-size: 0.9rem;
		color: var(--text, #333);
		padding-bottom: 0.1rem;
	}

	/* --- Task Styles --- */
	.task-row {
		gap: 0.75rem;
	}

	.circle {
		width: 0.8rem;
		height: 0.8rem;
		border: 1px solid var(--outline, #666);
		border-radius: 50%;
		margin-bottom: 0.25rem;
	}
</style>
