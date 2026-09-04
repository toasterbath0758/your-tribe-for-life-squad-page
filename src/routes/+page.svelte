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
    const {data} = $props()
    const persons = data.persons

    console.log(persons);
    
</script>

{#each persons as person }
    {person.name} <br>
    {person.fav_emoji} <br>
    {person.vibe_emoji} <br>
    
{/each}
