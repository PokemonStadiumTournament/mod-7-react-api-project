import { useEffect, useState } from "react";
import handleFetch from "../utils/handleFetch";

const PokemonTabStats = ({name, url}) => {

    // name, type sprite    
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async() => {
            const [data, error] = await handleFetch(url);
            console.log(data.types);
            if (data) setPokemon(data);
            if (error) setError(error)
        }
        fetchPokemon();
    }, [url]);
    // const [statsVisibility, changeStatsVisibility] = useState(hidden);

    // const clickHandle = () => {
    //     if (statsVisibility === hidden) changeStatsVisibility(showing);
    //     else changeStatsVisibility(closed);
    // }

        return (
            <li className="poke-tab">
                <div className="name">
                    <div className="poke-tab-name">{name}</div>
                </div>
                <div className="poke-stats">
                    <div className="type">
                        <div className="header">{pokemon.type}</div>
                    </div>
                    <div className="image">
                        <img alt="pokemon name" src={pokemon?.sprites?.front_default} />
                    </div>
                 </div>
            </li>
        )
}

export default PokemonTabStats