import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const pokemon = useContext(PokemonContext);
    console.log(pokemon);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/selection');
    };

    return (
        <>
            <h1>Pokemon Battlefield</h1>
            <img
                alt='hi'
                className='logoPokemon'
                src={''}
            />
            <button onClick={handleClick}>Start Simulation</button>
        </>
    );
};

export default MainPage;