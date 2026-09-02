<script>
    const {data} = $props()
    const persons = data.persons

    console.log(persons);
    
</script>

{#each persons as person }
    {person.name} <br>
{/each}
