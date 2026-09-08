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

				<h1>{person.name}</h1>

				{#if person.bio}
					<p>{person.bio}</p>
				{/if}

				<div class="favorite-color">
					<p>favoriete kleur</p>

					<span
						class="color-block"
						style={`background-color: ${person.fav_color}`}
					></span>
				</div>

			</div>

		</article>

	</section>

{:else}

	<p>Persoon niet gevonden.</p>

		border-radius: 8px;
	}

	/* Naam */
	.person-card h1 {
		margin-top: 2rem;

		font-size: 2.5rem;
		font-weight: 400;
        background-image: url('/images/pinboard.jpg');
	}
</style>