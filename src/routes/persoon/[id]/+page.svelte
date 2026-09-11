<script>
	const { data } = $props();
	const person = data.person;
</script>

{#if person}

	<section class="detail-page">

		<article class="polaroid">

			<img
				class="tape"
				src="/images/tape (2).png"
				alt=""
				
			/>

			<div class="photo-container">

				{#if person.mugshot}
					<img
						class="person-photo"
						src={`https://fdnd.directus.app/assets/${person.mugshot}`}
						alt={`Foto van ${person.name}`}
					/>
				{/if}

				{#if person.fav_emoji}
					<span class="emoji emoji-left">
						{person.fav_emoji}
					</span>
				{/if}

				{#if person.vibe_emoji}
					<span class="emoji emoji-right">
						{person.vibe_emoji}
					</span>
				{/if}

			</div>

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
	:global(body) {
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
                z-index: 4;
			}

			.photo-container {
				position: relative;

				.person-photo {
					width: 100%;
					aspect-ratio: 1 / 1;
                    display: block;
                    object-fit: cover;
					background-color: black;
				}

				.emoji {
					position: absolute;
                    font-size: 6rem;
					z-index: 3;
				}

				.emoji-left {
					top: -56px;
					left: -55px;

					transform: rotate(-10deg);
				}

				.emoji-right {
					right: -50px;
					bottom: -27px;

					transform: rotate(10deg);
				}
			}

			.person-info {
				margin-top: 1rem;

				font-family: Arial, sans-serif;

				h1 {
					margin: 0 0 1rem;

					font-family: "Comic Sans MS", cursive;
					font-size: 1.5rem;
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

						width: 30px;
						height: 30px;

						border-radius: 45% 55% 40% 60%;

						transform: rotate(-8deg);

						box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
					}
				}
			}
		}
	}
</style>