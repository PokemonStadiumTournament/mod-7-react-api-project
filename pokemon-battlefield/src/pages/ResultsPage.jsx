import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
    const navigate = useNavigate();
    const winnerPokemon = useContext(PokemonContext).winnerPokemon;
    const winner = useContext(PokemonContext).winner;

    const clickHandler = () => {
        navigate('/');
    }

    return (
        <>
        <h1>The winner is:</h1>
        <h1>{winner}</h1>
        <img
            alt='player 1 Pokemon'
            className='p1pokemon'
            src={winnerPokemon.sprites.front_default}
        />
        <button onClick={clickHandler}>Back to Main</button>
        </>
    );
};

export default ResultsPage;