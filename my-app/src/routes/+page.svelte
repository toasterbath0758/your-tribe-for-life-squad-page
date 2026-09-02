<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
Let {data} = $props();
Const persons = data.persons;
</script>

{#each persons as person}
{person.name}
{/each}

 <h1> <h1>
<p> hallo mensen </p>
