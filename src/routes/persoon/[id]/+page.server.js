export async function load({ fetch, params }) {
	const res = await fetch(
		`https://fdnd.directus.app/items/person/${params.id}?fields=id,name,mugshot,bio,fav_color`
	);

	const dataPerson = await res.json();

	console.log('params.id:', params.id);
	console.log('dataPerson:', dataPerson);

	return {
		person: dataPerson.data
	};
}