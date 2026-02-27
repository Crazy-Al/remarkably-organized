<div class="split-layout">
	<div class="day">
		{#each new Array(18) as _, i (i)}
			{@const h = i + 5}
			<div class="hour-label">
				{h === 12 ? 12 : h % 12}
				<small>{h < 12 ? 'AM' : 'PM'}</small>
			</div>
		{/each}
		{#each new Array(18) as _, i (i)}
			<div class="hour"></div>
		{/each}
	</div>

	<div class="right-half"></div>
</div>

<style lang="scss">
	/* --- Split Wrapper --- */
	.split-layout {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.right-half {
		flex: 1;
		border-left: 1px solid var(--outline);
	}

	/* --- Agenda Styles --- */
	.day {
		flex: 1;
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		/* Updated from 24 to 18 rows so they stretch perfectly */
		grid-template-rows: repeat(18, 1fr);
		justify-items: stretch;
		align-items: stretch;
		grid-auto-flow: column;
		padding: 3rem 1rem 0 0;
	}
	.hour {
		border-top: solid 1px var(--outline);
	}
	.hour-label {
		text-align: center;
		grid-column: 1;
		font-weight: var(--font-weight-light);
		font-size: 0.7em;
		color: var(--text-low);
		margin-top: -0.5rem;
		small {
			color: currentColor;
			font-size: 0.6em;
		}
	}
</style>
