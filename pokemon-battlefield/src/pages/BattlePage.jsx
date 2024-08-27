import { useState, useContext, useEffect } from "react";
import PokemonContext from "../context/PokemonContext";
import handleFetch from "../utils/handleFetch";
import BattleData from "../utils/battleStuff";
import Loading from "../components/loading";

const BattlePage = () => {
    const pokemon1 = useContext(PokemonContext).playerPokemon;
    const pokemon2 = useContext(PokemonContext).allPokemon[Math.floor(Math.random() * (8 - 0 + 1) + 0)];

    return (
        <>
        <h1>battle</h1>
        <BattleData pokemon1url={pokemon1} pokemon2url={pokemon2.url}/>
        </>
    );
};

export default BattlePage;