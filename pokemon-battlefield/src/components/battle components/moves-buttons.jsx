import { useContext, useEffect, useState } from "react";
import handleFetch from "../../utils/handleFetch";
import PokemonContext from "../../context/PokemonContext";

const MovesButtons = ({ setMenu }) => {
    const [oppMove, setOppMove] = useState();
    const playerHealth = useContext(PokemonContext).playerHealth;
    const setPlayerHealth = useContext(PokemonContext).setPlayerHealth;
    const oppData = useContext(PokemonContext).oppPokemon;
    const oppHealth = useContext(PokemonContext).oppHealth;
    const setOppHealth = useContext(PokemonContext).setOppHealth;
    const moves = useContext(PokemonContext).playerMoves;
    const setLog = useContext(PokemonContext).setLog;

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
        console.log(typeof oppHealth)
        setMenu('none');
        setTimeout(() => {
            setLog(`Player uses ${move.name}`);
            const newOppHealth = oppHealth - (move.power / 2);
            setOppHealth(newOppHealth);
        }, 500)
        setTimeout(() => {
            setLog(`Computer uses ${oppMove.name}`);
            const newPlayerHealth = playerHealth - (oppMove.power / 2);
            setPlayerHealth(newPlayerHealth);
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