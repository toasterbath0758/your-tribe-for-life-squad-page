<header>
    <h1>jan jaap en de rest</h1>
</header>

<ul class="wrapper">
        {#each persons as person}
            <li class="profile">
            <figure class="img-wrapper">
                <img src="https://fdnd.directus.app/assets/{person.mugshot}" alt="Profile picture"/>
                
                <p class="emoji1">{person.fav_emoji}</p>
                <p class="emoji2">{person.vibe_emoji}</p>
            </figure>
        
                
                <p>{person.name}</p>
                <p>{person.id}</p>
            </li>
        {/each}
    </ul>


<style>

    * {
        margin: 0;
        padding: 0;
        font-family: cooper;
        color: darkslategrey;

        /* sidebar */
        /* header {
        } */

        }

            /* applies to <body> */
        :global(body) {
            width: 100vw;
            background: lightgreen;
            /* background-image: url("/assets/pinboard.jpg"); */
        }


        ul.wrapper {
            display: flex;
            flex-direction: row;
            align-content: center;
            margin: 5em;

            overflow-x: scroll;
            
            scrollbar-color: orange lightgreen;
            scrollbar-width: auto;
            
            gap: 20px;
        }

        /* hover state van de profile */
        li.profile:hover {
            scale: 120%;
            transform: rotate(5deg);
            z-index: 100;
        
        }

        li.profile {
            display: flex;
            flex-direction: column;
            padding: 1em;
            margin: 5em;
            gap: 0.5em;
            width: fit-content;
            height: 300px;
            background: ivory;

            /* animation van de hover */
            transition: scale 0.1s ease-in, rotate 0.1s ease-in-out;
        

            .img-wrapper {
                position: relative;
                width: 200px;
                height: 200px;
                

                img {
                    width: 200px;
                    height: 200px;
                    object-fit: cover;
                }

                .emoji1 {
                    position: absolute;
                    width: min-content;
                    scale: 500%;
                    left: -10px;
                    top: -10px;
                    z-index: 1;
                }

                .emoji2 {
                    position: absolute;
                    width: min-content;
                    scale: 500%;
                    bottom: 0;
                    right: 0;
                    z-index: 1;
                }
            }
        }



</style>

<script>

	import { onMount } from 'svelte';

	const { data } = $props();
	const persons = data.persons;



</script>

