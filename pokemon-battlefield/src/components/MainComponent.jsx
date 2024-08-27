import { useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import handleFetch from '../utils/handleFetch';

const MainComponent = () => {
    const navigate = useNavigate();
    const [logoPokemon, setLogoPokemon] = useState();
    const pokemon = useContext(PokemonContext).allPokemon;
    const setPlayerHealth = useContext(PokemonContext).setPlayerHealth;
    const setOppHealth = useContext(PokemonContext).setOppHealth;
    const setLog = useContext(PokemonContext).setLog;
    
    useEffect(() => {
        setPlayerHealth(100);
        setOppHealth(100);
        setLog('Waiting for commands...');
        const fetchPokemon = async() => {
            const [data, error] = await handleFetch(pokemon[Math.floor(Math.random() * (8 - 0 + 1) + 0)].url);
            if (data) setLogoPokemon(data.sprites.front_default);
            if (error) setError(error)
        }
        fetchPokemon();
    }, []);

    const handleClick = () => {
        navigate('/selection');
    };

    return (
        <div className='mainPageContent'>
            <div className='mainColumn'>
                <div className='titleDiv'>
                    <h1 className="title1">Pokemon</h1>
                    <h1 className="title2">Battlefield</h1>
                </div>
                <div className='buttonDiv'>
                    <button onClick={handleClick} className="startButton">Start Simulation</button>
                </div>
            </div>
            <div className='logoDiv'>
                <img
                    alt='hi'
                    className='pokemonLogoImage'
                    src={logoPokemon}
                />
            </div>
        </div>
    );
};

export default MainComponent;