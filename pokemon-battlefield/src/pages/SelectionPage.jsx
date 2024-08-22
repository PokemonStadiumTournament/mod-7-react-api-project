import { useContext, useState } from "react";
import PokemonContext from "../context/PokemonContext";

const SelectionPage = () => {
    const pokemon = useContext(PokemonContext).allPokemon;
    const items = useContext(PokemonContext).allItems;
    const [currentOption, setCurrentOption] = useState();

    return (
        <>
            <h1>Selection Screen</h1>
        </>
    );
};

export default SelectionPage;