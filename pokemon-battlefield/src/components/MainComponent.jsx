import { useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import handleFetch from '../utils/handleFetch';

const MainComponent = () => {
    const navigate = useNavigate();
    const [logoPokemon, setLogoPokemon] = useState();
    const [error, setError] = useState();
    
    const pokemon = useContext(PokemonContext).allPokemon;
    
    useEffect(() => {
        const fetchPokemon = async() => {
            const [data, error] = await handleFetch(pokemon[[Math.floor(Math.random() * (8 - 0 + 1) + 0)]].url);
            if (data) setLogoPokemon(data.sprites.front_default);
            if (error) setError(error)
        }
        fetchPokemon();
    }, []);

    const handleClick = () => {
        navigate('/selection');
    };

    return (
        <>
            <h1 className="title1">Pokemon</h1>
            <h1 className="title2">Battlefield</h1>
            <img
                alt='hi'
                className='pokemonLogoImage'
                src={logoPokemon}
            />
            <button onClick={handleClick} className="startButton">Start Simulation</button>
        </>
    );
};

export default MainComponent;