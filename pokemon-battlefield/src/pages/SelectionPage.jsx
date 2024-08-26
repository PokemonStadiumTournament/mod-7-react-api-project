import { useContext, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import PokemonSelection from "../components/PokemonSelection";
import ItemSelection from "../components/ItemSelection";

const SelectionPage = () => {
    const [currentOption, setCurrentOption] = useState('pokemon');

    return currentOption === 'pokemon' ? <PokemonSelection setCurrentOption={setCurrentOption}/> : <ItemSelection setCurrentOption={setCurrentOption}/>;
};

export default SelectionPage;