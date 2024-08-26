import { useState, useContext, useEffect } from "react";
import PokemonContext from "../context/PokemonContext";
import handleFetch from "../utils/handleFetch";
import BattleData from "../utils/battleStuff";
import Loading from "../components/loading";

const BattlePage = () => {
    const pokemon1 = useContext(PokemonContext).allPokemon[0];
    const pokemon2 = useContext(PokemonContext).allPokemon[1];

    return (
        <>
        <h1>battle</h1>
        <BattleData pokemon1url={pokemon1.url} pokemon2url={pokemon2.url}/>
        </>
    );
};

export default BattlePage;