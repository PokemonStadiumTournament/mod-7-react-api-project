import { useEffect, useState } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "./PokemonContext";

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState([{"name": "pikachu", "url": "https://pokeapi.co/api/v2/pokemon/25/"}]);
    const wantedPokemon = ['charizard', 'pikachu', 'gengar', 'lucario', 'greninja', 'garchomp', 'tyranitar', 'gardevoir', 'leafeon'];
    
    useEffect(() => {
        const fetchPokemon = async() => {
            const [data, error] = await handleFetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            if (data) setAllPokemon(data.results.filter(({ name }) => wantedPokemon.includes(name)));
            if (error) setError(error)
        }
        fetchPokemon();
    }, []);

    const [playerPokemon, setPlayer] = useState();
    const [playerHealth, setPlayerHealth] = useState(100);
    const [oppPokemon, setOpp] = useState();
    const [oppHealth, setOppHealth] = useState(100);
    const [winner, setWinner] = useState();
    const [winnerPokemon, setWinnerPokemon] = useState();
    const [playerMoves, setMoves1] = useState([]);
    const [logMessage, setLog] = useState('Waiting for commands...');

    let contextValues = {allPokemon, setAllPokemon, 
        playerPokemon, setPlayer,
        playerHealth, setPlayerHealth,
        oppPokemon, setOpp,
        oppHealth, setOppHealth,
        winner, setWinner,
        winnerPokemon, setWinnerPokemon,
        playerMoves, setMoves1,
        logMessage, setLog
    };
    
    return (
        <PokemonContext.Provider value={contextValues}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;