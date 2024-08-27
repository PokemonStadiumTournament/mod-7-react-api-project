import { useContext, useEffect, useState } from "react";
import handleFetch from "../utils/handleFetch";
import { useNavigate } from "react-router-dom";
import PokemonContext from "../context/PokemonContext";

const PokemonTabStats = ({name, url}) => {
    const navigate = useNavigate(); 

    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        const fetchPokemon = async() => {
            const [data, error] = await handleFetch(url);
            // console.log(data.types);
            if (data) setPokemon(data);
            if (error) setError(error)
        }
        fetchPokemon();
    }, [url]);

    const [component, setComponent] = useState();
    const clickingPokeTab = (e) => {
        e.preventDefault();
        if (!component) {
            setComponent(
            <div className="poke-stats">
                <figure className="image">
                    <img alt="pokemon name" src={pokemon?.sprites?.front_default}/>
                </figure>
                <div className="type">
                    <h2 className="header">Types</h2>
                    {pokemon?.types.map((type, index) => <p key={index}>{type.type.name}</p>)}
                </div>
                <button className="select-pokemon" onClick={selectPokemon}>Select</button>
            </div>
            );
        } else {
            setComponent();
        }
    }

    const setPlayer = useContext(PokemonContext).setPlayer;
    const selectPokemon = () => {
        setPlayer(url);
        navigate('/battle');
    }

    return (
        <li className="ui card">
            <div className="name">
                <button className="poke-tab-name" onClick={clickingPokeTab}>{name}</button>
            </div>
            {component}
        </li>
    )
}

export default PokemonTabStats