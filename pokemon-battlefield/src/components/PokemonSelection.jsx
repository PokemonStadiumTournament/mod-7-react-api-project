import { useState, useEffect, useContext } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "../context/PokemonContext";
import PokemonTabStats from "./PokemonTabStats";
import { useNavigate } from "react-router-dom";

const PokemonSelection = () => {
    const allPokemon = useContext(PokemonContext).allPokemon;

    return (
        <>
        <h1>Pokemon Selections</h1>
        <div className="name-search-container">
                <h3>Choose From The Available Pokemons Here:</h3>
                <div className="pokemon-list-container">
                    <ul className="pokemon-list">
                        {allPokemon?.map((pokemon, index) => <PokemonTabStats key={index} name={pokemon.name} url={pokemon.url} />)}
                    </ul>
            </div>
        </div>
        </>
    )
}

export default PokemonSelection;