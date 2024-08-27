import { useContext, useEffect, useState } from "react";
import handleFetch from "../../utils/handleFetch";
import PokemonContext from "../../context/PokemonContext";
import { useNavigate } from "react-router-dom";

const MovesButtons = ({ setMenu }) => {
    const navigate = useNavigate();
    const [oppMove, setOppMove] = useState();
    const playerData = useContext(PokemonContext).playerPokemon;
    const playerHealth = useContext(PokemonContext).playerHealth;
    const setPlayerHealth = useContext(PokemonContext).setPlayerHealth;
    const oppData = useContext(PokemonContext).oppPokemon;
    const oppHealth = useContext(PokemonContext).oppHealth;
    const setOppHealth = useContext(PokemonContext).setOppHealth;
    const moves = useContext(PokemonContext).playerMoves;
    const setLog = useContext(PokemonContext).setLog;
    const setWinner = useContext(PokemonContext).setWinner;
    const setWinnerPokemon = useContext(PokemonContext).setWinnerPokemon;

    useEffect(() => {
        const fetchOppMove = async() => {
            const [data, error] = await handleFetch(oppData?.moves[Math.floor(Math.random() * ((oppData?.moves.length - 1) - 0 + 1) + 0)].move.url);
            if (data) setOppMove(data);
            if (error) setError(error)
        };
        fetchOppMove();
    }, []);

    const handleClick = (e) => {
        const name = e.target.textContent;
        const move = moves.find((e) => e.name === name);
        setMenu('none');
        setTimeout(() => {
            setLog(`Player uses ${move.name}`);
            setOppHealth(oppHealth - (move.power / 2));
            if (oppHealth <= 0) {
                setOppHealth(0);
                setLog(`${oppData.name} has fainted`);
                setWinner('The Player');
                setWinnerPokemon(playerData);
                setTimeout(() => {
                    navigate('/result');
                }, 500);
            };
        }, 500)
        setTimeout(() => {
            setLog(`Computer uses ${oppMove.name}`);
            setPlayerHealth(playerHealth - (oppMove.power / 2));
            if (playerHealth <= 0) {
                setPlayerHealth(0);
                setLog(`${playerData.name} has fainted`);
                setWinner('The CPU');
                setWinnerPokemon(oppData);
                setTimeout(() => {
                    navigate('/result');
                }, 500);
            };
        }, 1000)
        setTimeout(() => {
            setLog('Waiting for commands...');
            setMenu('action');
        }, 1500)
    };

    return (
        <div className="moves-buttons">
            <button onClick={handleClick}>{moves[0]?.name}</button>
            <button onClick={handleClick}>{moves[1]?.name}</button>
            <button onClick={handleClick}>{moves[2]?.name}</button>
            <button onClick={handleClick}>{moves[3]?.name}</button>
        </div>
    );
}

export default MovesButtons;