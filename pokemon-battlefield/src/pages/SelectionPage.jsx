import { useContext, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import PokemonSelection from "../components/PokemonSelection";
import ItemSelection from "../components/ItemSelection";

const SelectionPage = () => {
    const pokemon = useContext(PokemonContext).allPokemon;
    const items = useContext(PokemonContext).allItems;
    const [currentOption, setCurrentOption] = useState('pokemon');

    console.log(pokemon);
    console.log(items);

    return currentOption === 'pokemon' ? <PokemonSelection setCurrentOption={setCurrentOption}/> : <ItemSelection setCurrentOption={setCurrentOption}/>;
};

export default SelectionPage;