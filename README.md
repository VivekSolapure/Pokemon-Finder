# Pokemon Finder App

This project is a simple React application that allows users to search for and view information about various Pokémon. It uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data.

## Project Structure


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Components

### `App.js`

The main component that manages the state of the application and renders the `SearchBar` and `PokemonCard` components.

### `PokemonCard.js`

A component that displays information about a single Pokémon, including its image, name, and type(s).

### `SearchBar.js`

A component that provides a search input for filtering Pokémon by name.

### `api.js`

A service file that contains functions for fetching Pokémon data from the PokéAPI.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).