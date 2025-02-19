import React, { useEffect, useState } from 'react';
import { fetchPokemons, fetchPokemon } from './services/api';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPokemons = async () => {
            const results = await fetchPokemons();
            const detailedPokemons = await Promise.all(results.map(p => fetchPokemon(p.name)));
            setPokemons(detailedPokemons);
            setFilteredPokemons(detailedPokemons);
            setLoading(false);
        };
        loadPokemons();
    }, []);

    const handleSearch = (term) => {
        const filtered = pokemons.filter(p => p.name.includes(term));
        setFilteredPokemons(filtered);
    };

    return (
        <div className="App">
            <h1>Pokemon Finder</h1>
            <SearchBar onSearch={handleSearch} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="pokemon-container">
                    {filteredPokemons.map(pokemon => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;