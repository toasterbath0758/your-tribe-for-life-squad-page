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
 
<style>

/* font-sizes */
:root {
    --font-size-xxl: 2.8em;
    --font-size-xl: 2em;
    --font-size-l: 1.8em;
    --font-size-m: 1em;
    --font-size-s: 0.8em;
    --font-size-xs: 0.5em;
    --font-size-xxs: 0.2em;
}

/* font-weight */
:root {
    --font-weight-xxl: ;
    --font-weight-xl: ;
    --font-weight-l: ;
    --font-weight-m: ;
    --font-weight-s: ;
    --font-weight-xs: ;
    --font-weight-xxs: ;
}

/* colors? */
:root {
    --color-1: black;
    --color-2: white;
    --color-3: beige;
    --color-4: ;
}
</style>