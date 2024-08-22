import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";

const MainPage = () => {
    const pokemon = useContext(PokemonContext).allPokemon;
    console.log(pokemon);

    return (
        <>
            <h1>Pokemon Battlefield</h1>
            <img
                alt='hi'
                className='logoPokemon'
                src={''}
            />
            <button>Start Simulation</button>
        </>
    );
};

export default MainPage;