import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import BattleData from "../components/battle components/battleStuff";

const BattlePage = () => {
    const pokemon1 = useContext(PokemonContext).playerPokemon;
    const pokemon2 = useContext(PokemonContext).allPokemon[Math.floor(Math.random() * (8 - 0 + 1) + 0)];

    return (
        <BattleData pokemon1url={pokemon1} pokemon2url={pokemon2.url} className='battleButtons'/>
    );
};

export default BattlePage;