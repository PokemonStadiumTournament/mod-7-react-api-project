import { useState, useContext, useEffect } from "react";
import PokemonContext from "../context/PokemonContext";
import handleFetch from "../utils/handleFetch";
import BattleButtons from "../components/battle components/buttons";
import HealthBar from "../components/battle components/healthBar";
import { useNavigate } from "react-router-dom";

const BattleData = ({ pokemon1url, pokemon2url, player1Item = {}, player2Item = {} }) => {
    const navigate = useNavigate();
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();

    useEffect(() => {
        const fetchPokemon1 = async() => {
            const [data, error] = await handleFetch(pokemon1url);
            if (data) setP1(data);
            if (error) setError(error)
        };
        fetchPokemon1();
        const fetchPokemon2 = async() => {
            const [data, error] = await handleFetch(pokemon2url);
            if (data) setP2(data);
            if (error) setError(error)
        };
        fetchPokemon2();
    }, []);

    const [health1, setHealth1] = useState(100)
    const [health2, setHealth2] = useState(100)
    const [currTurn, setTurn] = useState('p1');

    const p1moves = [];
    const p2moves = [];

    for (let i = 0; i < 4; i++) {
        p1moves.push(p1?.moves[Math.floor(Math.random() * ((p1?.moves.length - 1) - 0 + 1) + 0)])
        p2moves.push(p2?.moves[Math.floor(Math.random() * ((p2?.moves.length - 1) - 0 + 1) + 0)])
    }

    if (health1 <= 0 || health2 <= 0) {
        const setWinner = useContext(PokemonContext).setWinner;
        setWinner(health1 <= 0 ? p2 : p1);
        navigate('/result');
    }

        return (
            <div>
                <div className="pokemon-sprites">
                    <img
                        alt='player 1 Pokemon'
                        className='p1pokemon'
                        src={p1?.sprites.back_default}
                    />
                    <HealthBar hp={health1} maxHp={100} />
                    <img
                        alt='player 2 Pokemon'
                        className='p2pokemon'
                        src={p2?.sprites.front_default}
                    />
                    <HealthBar hp={health2} maxHp={100}/>
                </div>
                <BattleButtons turn={currTurn} setTurn={setTurn} moveArr1={p1moves} moveArr2={p2moves} health1={health1} health2={health2} setHealth1={setHealth1} setHealth2={setHealth2}/>
            </div>
        )

}

export default BattleData;