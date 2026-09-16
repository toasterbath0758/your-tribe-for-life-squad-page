# janjaap en de rest


## inhoudsopgave
- beschrijving
- ontwerp en design

## beschrijving
We hebben een squadpage gemaakt in het thema van Polaroids. Alle klasgenoten en docenten worden gepresenteerd op hun eigen Polaroid, waarop persoonlijke informatie en een foto te zien zijn.

## ontwerp en design

Voor ons ontwerp zijn we gegaan voor een simpele galerij waar je doorheen kunt scrollen. De Polaroids worden gepresenteerd op een lichtgroene achtergrond. Aan de zijkanten van de foto’s staan de favoriete emoji’s van de desbetreffende persoon, waardoor ieder kaartje wat persoonlijker wordt.

Wanneer je op een Polaroid klikt, word je doorgestuurd naar de detailpagina. Hier zie je een grotere foto van de persoon, een korte bio en een verfklodder met daarin de favoriete kleur. Verder hebben we een donkergroene header gebruikt die contrasteert met de lichtgroene achtergrond en aansluit bij de rest van de huisstijl.


### screenshots van het ontwerp/site
laptop/pc min-width 1300 <br>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/a27e20d5-e933-49ff-9317-ca2c1b67ce8d" />

kleine laptop/tablet min-width 1000 <br>
<img width="300" alt="image" src="https://github.com/user-attachments/assets/0606484b-35d1-4ad2-b3ce-9cd6d1383ae1" />

tablet min-width 570 <br>
<img width="200" alt="image" src="https://github.com/user-attachments/assets/3e86e9ad-988f-4620-b8ef-e7e9ffe66a09" />

telefoon <br>
<img width="100" alt="image" src="https://github.com/user-attachments/assets/390709ae-ca54-463e-a8f2-01a58b6eae35" />

### mockups
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/26a4dc58-12d8-4fd0-8e53-35b04623ce2f" />


## kenmerken van de site


### home pagina

- **Dynamische data met Svelte**  
  Met `{#each persons as person}` worden alle personen uit de Directus data gehaald.

- **Conditionele rendering**  
  Met `{#if}` controleren we of een persoon een mugshot of favoriete emoji heeft. Als er geen mugshot beschikbaar is, wordt een fallback     afbeelding getoond.

- **Dynamische detailpagina's**  
  Elk profiel linkt met het persoonlijke ID naar een eigen detailpagina:
  `<a href={\`/persoon/${person.id}\`}>`

- **Responsive layout**  
  Met media queries verandert de layout van 1 kolom 

- **Interactieve profielkaarten**  
  Met `:hover`, `scale`, `rotate` en `transition` worden de Polaroids vergroot en licht gedraaid wanneer je eroverheen hovert.

- **Emoji's positioneren**  
  De favoriete emoji's worden met `position: absolute` over de foto's geplaatst.

- **Responsive afbeeldingen**  
  Met `object-fit: cover` blijven de mugshots netjes binnen het vaste formaat van de Polaroids.





### Detailpagina

- **Dynamische persoonsgegevens**  
  De detailpagina ontvangt één `person` en toont hiervan de naam, mugshot, bio, favoriete emoji's en favoriete kleur.

- **Dynamische favoriete kleur**  
  De favoriete kleur uit Directus wordt direct gebruikt als CSS-kleur met:
  `style={\`background-color: ${person.fav_color}\`}`.

- **Emoji's over de foto**  
  De emoji's worden met `position: absolute` over de mugshot geplaatst over de foto. de foto heeft `position: relative`, waardoor de emoji's ten opzichte van de foto gepositioneerd worden.

- **Polaroid ontwerp**  
  Met CSS is de detailpagina vormgegeven als een Polaroid. Het plakband wordt met `position: absolute` over de bovenkant van de kaart geplaatst.

- **Fallback**  
  Als er geen persoon gevonden wordt, toont de pagina `Persoon niet gevonden`.







# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.17.0 create --template minimal --no-types --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
