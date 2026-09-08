<script>
	let { data } = $props();

	let person = $derived(data.person);
</script>

{#if person}

	<section class="detail-page">

		<article class="polaroid">

		
			<img
				class="tape"
				src="/images/tape (2).png"
				alt=""
				aria-hidden="true"
			/>

			<!-- Foto van persoon uit Directus -->
			{#if person.mugshot}
				<img
					class="person-photo"
					src={`https://fdnd.directus.app/assets/${person.mugshot}`}
					alt={`Foto van ${person.name}`}
				/>
			{/if}

			<div class="person-info">

		background-color: white;
		padding: 2rem;
	}


	.person-card {
		width: 80%;
		max-width: 600px;
		min-height: 600px;

		background-color: #f6e9d9;

		border: 4px solid black;
		border-radius: 8px;

		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 5rem 2rem 2rem;
	}

	/* Profielfoto */
	.person-card img {
		width: 200px;
		height: 200px;

		object-fit: cover;

		border-radius: 8px;
	}

	/* Naam */
	.person-card h1 {
		margin-top: 2rem;

		font-size: 2.5rem;
		font-weight: 400;
	}
</style>