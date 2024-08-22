# Pokemon Battlefield

Created by Engels G. and Kelly X.C.

## 🚀 Mission statement

Our application, Pokemon Battlefield is for kids and adults who also like Pokemon. It allows users to simulate battles in the Pokemon style.

## API & React Router

This application will use the PokeApi API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: https://pokeapi.co/docs/v2 
- API endpoint #1: https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 (GET)
  - Description of endpoint: provides a list of up to 1302 Pokemon
  - List of data values used by the endpoint 
    - Being able to search by `name` 
    - More data shown through the `url`
- API endpoint #2: https://pokeapi.co/api/v2/pokemon/{id or name}/ (GET)
  - Description of endpoint: accessing an individual Pokemon
  - List of data values used by the endpoint
    - Accessing their `id` and `type`
    - Showing the artwork with `image`
- API endpoint #3: https://pokeapi.co/api/v2/move/{id or name}/  (GET)
  - Description of endpoint: using these values to decide who wins the battle 
  - List of data values used by the endpoint
    - Accessing their `name`
    - `pp`, how many times a move can be used 
    - `type`, type of move 
    - `target`, how many enemies or allies are hit
    - `power`, how strong the move is

Our API does **not** require a key.

**Example:**
- https://api.artic.edu/api/v1/artworks
  - This will fetch an array of artwork objects
  - For each artwork, I want the `id`, `title`, and `image_id`
- https://api.artic.edu/api/v1/artworks/{id}
  - This will fetch a single artwork object
  - I will use the `id`, `title`, `short_description`, `medium_display`, `place_of_origin` and `image_id`
- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
  - For each artwork, I will use the `id` and `title`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/` page, users can start the simulation.
* On the `/selection` page, users can pick their Pokemon, moves and items, and rivals.
* On the `/battle` page, users can simulate a fight between Pokemons like in the games.

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to use berries to equip and in combat.
* Users will be able to have background locations.
* Users will be able to see a random pokemon rendered on the main screen.

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**: Wed, 8/21 (Displaying Pokemon)

- [ ] Fetching Pokemons work properly.
- [ ] Routing to `/selection` works properly.
- [ ] Pokemons can be rendered and filtered on the selection screen.

**Day 2**: Thurs, 8/22 (Selecting Multiple Pokemon for Battle)
- [ ] Routing to `/battle` works properly.
- [ ] Selection works properly.
- [ ] `/battle` route is rendered properly.

**Day 3**: Fri, 8/23 (Battle in Action, **MVP due by the end of the day**) 
- [ ] Actions can be taken in combat.
- [ ] Pokémon stats are updated after every turn.
- [ ] Pokémon battle can have a winner.

**Day 4** Sat, 8/24 (Testing and Demo)
- [ ] Testing both selection and battle screens.
- [ ] Presentation is copied.
- [ ] Both partners have access to the presentation.

**Day 5** Mon, 8/26 (Demo and Presentation Slides)
- [ ] The demo video has been uploaded to the presentation.
- [ ] All presentation content is done.
- [ ] Add speaker notes.

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
