import { useEffect, useState } from "react";
import handleFetch from "../utils/handleFetch";

const PokemonTabStats = ({name, url}) => {

    // name, type sprite    
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async() => {
            const [data, error] = await handleFetch(url);
            console.log(data);
            if (data) setPokemon(data);
            if (error) setError(error)
        }
        fetchPokemon();
    }, [url]);

// const [visibility, changeVisibility] = useState(hidden);

    // const hovering = () => {
    //     if (visibility === hidden) changeVisibility(showing);
    //     else changeVisibility(closed);
    // }

    const clickingPokeTab = (e) => {
        e.preventDefault();
        var elem = document.querySelector('.poke-stats');
        
        if (elem.style.display === "none") {
            elem.style.display = "block";
        } else {
            elem.style.display = "none";
        }
    }

    return (
        <li className="ui card">
            <div className="name">
                {/* <button className="poke-tab-name">{name}</button> */}
                <button className="poke-tab-name" onClick={clickingPokeTab}>{name}</button>
                {/* <button className="poke-tab-name" onClick={clickingPokeTab}>{name + '  ▼'}</button> */}
                {/* <div className="poke-tab-name">{name}</div> */}
            </div>
            <div className="poke-stats">
                <div className="image">
                    <img alt="pokemon name" src={pokemon?.sprites?.front_default}/>
                </div>
                <div className="type">
                    <div className="header">{pokemon.type}</div>
                    <p>Placeholder - the type should be here</p>
                </div>
                <button className="select-pokemon">Select</button>
            </div>
        </li>
    )
}

export default PokemonTabStats