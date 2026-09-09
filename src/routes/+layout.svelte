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

<!-- <button class="sidebar-button">
<p>></p>
</button> -->

<!-- <section class="sidebar">
	<p>hallo</p>
</section> -->



{@render children()}

<style>

	* {
		margin: 0;
	    padding: 0;
	    font-family: cooper;
	    color: darkslategrey;
	}

	/* sidebar */
    /* button.sidebar-button {
        display: flex;
        position: fixed;
        height: 50px;
        width: 20px;
        align-self: center;
		
        left: 0;
        align-content: center;
    } */

	/* .sidebar.active {
  	display: block; */
/* 
    } */

	/* .sidebar {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 200;
		width: 100px;
		height: 100vw;
		background: lime;
		

	} */

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
