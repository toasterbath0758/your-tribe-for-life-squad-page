<section class="detail-page">



	<article class="person-card">
		<img
			src="/images/profielfoto.jpg"
			alt="Profielfoto"
		/>

		<h1>Naam</h1>
	</article>

</section>

<style>
	.detail-page {
		min-height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

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