export async function load(){
    const res = await fetch ("https://fdnd.directus.app/items/person?fields=id,name,mugshot,fav_color,fav_emoji,vibe_emoji&filter[squads][squad_id][cohort][_eq]=2627")
    const dataPersons = await res.json()
    
    return {persons: dataPersons.data}
}



