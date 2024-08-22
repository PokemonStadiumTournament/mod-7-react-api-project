import { useEffect, useState } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "./PokemonContext";

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState([{"name": "pikachu", "url": "https://pokeapi.co/api/v2/pokemon/25/"}]);
    const [allItems, setAllItems] = useState();
    const [error, setError] = useState('');

    const wantedPokemon = ['charizard', 'pikachu', 'gengar', 'lucario', 'greninja', 'garchomp', 'tyranitar', 'gardevoir', 'leafeon'];
    const wantedItems = ['leftovers', 'sitrus-berry', 'air-balloon', 'expert-belt', 'rocky-helmet', 'bright-powder', 'focus-sash', 'ability-shield', 'custap-berry'];
    
    useEffect(() => {
        const fetchPokemon = async() => {
            const [data, error] = await handleFetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            if (data) setAllPokemon(data.results.filter(({ name }) => wantedPokemon.includes(name)));
            if (error) setError(error)
        }
        fetchPokemon();
        const fetchItem = async() => {
            const [data, error] = await handleFetch("https://pokeapi.co/api/v2/item?limit=100000&offset=0");
            if (data) setAllItems(data.results.filter(({ name }) => wantedItems.includes(name)));
            if (error) setError(error)
        }
        fetchItem();
    }, []);

    let contextValues = {allPokemon, setAllPokemon, allItems, setAllItems};
    
    return (
        <PokemonContext.Provider value={contextValues}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;