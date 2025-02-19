import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export const fetchPokemon = async (name) => {
    try {
        const response = await api.get(`/pokemon/${name}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        return null;
    }
};

export const fetchPokemons = async (limit = 151) => {
    try {
        const response = await api.get(`/pokemon?limit=${limit}`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching Pokemons:", error);
        return [];
    }
};