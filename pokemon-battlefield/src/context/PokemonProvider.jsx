import { useEffect, useState } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "./PokemonContext";

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState();
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetch = async() => {
            const [data, error] = await handleFetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            if (data) setAllPokemon(data.results);
            if (error) setError(error)
        }
        fetch();
    }, []);

    let contextValues = {allPokemon, setAllPokemon};
    
    return (
        <PokemonContext.Provider value={contextValues}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;