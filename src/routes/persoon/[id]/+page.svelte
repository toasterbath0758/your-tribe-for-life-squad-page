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

{/if}

<style>

body{

	margin: 0;
}
	.detail-page {
		min-height: 100vh;
        display: flex;
		justify-content: center;
		align-items: center;
		padding: 4rem 1rem;
        background-image: url('/images/pinboard.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		.polaroid {
			position: relative;
            width: min(80vw, 340px);
            background-color: white;
            padding: 1rem 1rem 2rem;

			.tape {
				position: absolute;
                width: 90px;
				top: -35px;
				left: 40%;
                z-index: 2;
			}

			.person-photo {
				width: 100%;
				aspect-ratio: 1 / 1;
                display: block;
                object-fit: cover;
                background-color: black;
			}

			.person-info {
				margin-top: 1rem;

				h1 {
					margin: 0 0 1rem;
                    font-size: 1rem;
					font-weight: 400;
				}

				 p {
					margin: 0 0 1rem;
					line-height: 1.5;
				}

				.favorite-color {
					display: flex;
					align-items: center;
					gap: 1rem;

					p {
						margin: 0;
					}

					.color-block {
						display: inline-block;

						width: 22px;
						height: 22px;
					}
				}
			}
		}
	}
</style>