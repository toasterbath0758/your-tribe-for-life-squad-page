<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <h1>jan jaap en de rest</h1>
</header>



{@render children()}

<style>

	* {
		margin: 0;
	    padding: 0;
	    font-family: cooper;
	    color: darkslategrey;
	}



    header {
		padding: 1em;
        display: flex;
        z-index: 10;
		width: 100vw;

        background: green;

		h1 {
			color: lightgreen;
		}
    }

</style>
