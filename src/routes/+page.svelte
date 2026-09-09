






<ul class="wrapper">
        {#each persons as person}
            <li class="profile">
            <figure class="img-wrapper">
                <img src="https://fdnd.directus.app/assets/{person.mugshot}" alt="Profile picture"/>
                

                {#if person.fav_emoji && person.fav_emoji.length > 10}

                <p hidden class="emoji1">{person.fav_emoji}</p>

                {:else}

                <p  class="emoji1">{person.fav_emoji}</p>
                {/if}
                
            
                <p class="emoji2">{person.vibe_emoji}</p>
                
            </figure>
        
                
                <p>{person.name}</p>
                <p>{person.id}</p>
                <a href="">--></a>
            </li>

            
        {/each}
    </ul>


<style>

    * {
        margin: 0;
        padding: 0;
        font-family: cooper;
        color: darkslategrey;
    }



    /* applies to <body> */
    :global(body) {
        margin: 0;
        width: 100vw;
        background: lightgreen;
        
        /* background-image: url("$lib/assets/pinboard.jpg"); */
    }
    ul.wrapper {   
        /* layout voor telefoon          */
        padding: 10em;
        display: flex;
        flex-direction: column;
        gap: 1em;
    
        /* layout voor tablet */
        @media (min-width: 570px){
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 10em 1em 1em 1em;
        }
        /* layout voor tablet/kleine laptop */
        @media (min-width: 1000px){
            grid-template-columns: 1fr 1fr 1fr;
        }
        /* layout voor pc (een scroll carousel) */
        @media (min-width: 1300px){
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        scrollbar-color: green lightgreen;
        scrollbar-width: auto;
        
        padding: 10em;
        
        }
        
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
        box-shadow: 0 0 50px 0px black;
        align-self: center;
        justify-self: center;
        padding: 1em;
        gap: 0.5em;
        
        height: 300px;
        background: ivory;
        /* animation van de hover */
        transition: scale 0.1s ease-in, rotate 0.1s ease-in-out;
    
        .img-wrapper {
            position: relative;
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

