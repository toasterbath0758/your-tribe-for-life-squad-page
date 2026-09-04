<script>
    const {data} = $props()
    const persons = data.persons

    console.log(persons);
    
</script>

{#each persons as person }
    {person.name} <br>
    {person.fav_emoji} <br>
    {person.vibe_emoji} <br>
    
{/each}
