export async function load({ fetch, params }) {
	const res = await fetch(
		`https://fdnd.directus.app/items/person/${params.persoonid}?fields=id,name,mugshot,bio,fav_color,fav_emoji,vibe_emoji`
	);

	const dataPerson = await res.json();



	return {
		person: dataPerson.data
	};
}