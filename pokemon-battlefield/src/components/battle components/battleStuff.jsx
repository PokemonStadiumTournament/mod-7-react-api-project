import { useState, useContext, useEffect } from "react";
import PokemonContext from "../../context/PokemonContext";
import handleFetch from "../../utils/handleFetch";
import BattleButtons from "./buttons";
import HealthBar from "./healthBar";
import { useNavigate } from "react-router-dom";
import BattleLog from "./battleMessage";

const BattleData = ({ pokemon1url, pokemon2url }) => {
    const navigate = useNavigate();
    const [p1, setP1] = useState();
    const [opp, setOpp] = useState();

    useEffect(() => {
        const fetchPokemon1 = async() => {
            const [data, error] = await handleFetch(pokemon1url);
            if (data) setP1(data);
            if (error) setError(error)
        };
        fetchPokemon1();
        const fetchPokemon2 = async() => {
            const [data, error] = await handleFetch(pokemon2url);
            if (data) setOpp(data);
            if (error) setError(error)
        };
        fetchPokemon2();
    }, []);

    const [health1, setHealth1] = useState(100);
    const [health2, setHealth2] = useState(100);

    const p1moves = [];
    for (let i = 0; i < 4; i++) {
        p1moves.push(p1?.moves[Math.floor(Math.random() * ((p1?.moves.length - 1) - 0 + 1) + 0)]);
    };

    if (health1 <= 0 || health2 <= 0) {
        const setWinner = useContext(PokemonContext).setWinner;
        const setWinnerPokemon = useContext(PokemonContext).setWinnerPokemon;
        setWinner(health1 <= 0 ? 'The CPU' : 'The Player');
        setWinnerPokemon(health1 <= 0 ? opp : p1);
        navigate('/result');
    };

    return (
        <div>
            <div className="pokemon-sprites">
                <div className='playerPokemonRender'>
                    <img
                        alt='player 1 Pokemon'
                        className='p1pokemon'
                        src={p1?.sprites.back_default}
                    />
                    <HealthBar hp={health1} maxHp={100} />
                </div>
                <div>
                    <img
                        alt='player 2 Pokemon'
                        className='p2pokemon'
                        src={opp?.sprites.front_default}
                    />
                    <HealthBar hp={health2} maxHp={100}/>
                </div>
            </div>
            <BattleLog />
            <BattleButtons moveArr={p1moves} oppData={opp} health1={health1} health2={health2} setHealth1={setHealth1} setHealth2={setHealth2}/>
        </div>
    );
}

export default BattleData;