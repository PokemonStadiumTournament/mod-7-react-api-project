import { useContext, useEffect, useState } from "react";
import handleFetch from "../../utils/handleFetch";
import PokemonContext from "../../context/PokemonContext";

const MovesButtons = ({ setMenu, moveArr, oppData, health, setHealth, oppHealth, setOppHealth }) => {
    const [move1, setMove1] = useState();
    const [move2, setMove2] = useState();
    const [move3, setMove3] = useState();
    const [move4, setMove4] = useState();
    const [oppMove, setOppMove] = useState();

    useEffect(() => {
        const fetchMove1 = async() => {
            const [data, error] = await handleFetch(moveArr[0].move.url);
            if (data) setMove1(data);
            if (error) setError(error)
        };
        fetchMove1();
        const fetchMove2 = async() => {
            const [data, error] = await handleFetch(moveArr[1].move.url);
            if (data) setMove2(data);
            if (error) setError(error)
        };
        fetchMove2();
        const fetchMove3 = async() => {
            const [data, error] = await handleFetch(moveArr[2].move.url);
            if (data) setMove3(data);
            if (error) setError(error)
        };
        fetchMove3();
        const fetchMove4 = async() => {
            const [data, error] = await handleFetch(moveArr[3].move.url);
            if (data) setMove4(data);
            if (error) setError(error)
        };
        fetchMove4();
        const fetchOppMove = async() => {
            const [data, error] = await handleFetch(oppData?.moves[Math.floor(Math.random() * ((oppData?.moves.length - 1) - 0 + 1) + 0)].move.url);
            if (data) setOppMove(data);
            if (error) setError(error)
        };
        fetchOppMove();
    }, []);

    const moves = [move1, move2, move3, move4];

    const setLog = useContext(PokemonContext).setLog;
    const handleClick = (e) => {
        const name = e.target.textContent;
        const move = moves.find((e) => e.name === name);
        setMenu('none');
        setTimeout(() => {
            setLog(`Player uses ${move.name}`);
            setOppHealth(oppHealth - (move.power / 2));
        }, 500)
        setTimeout(() => {
            setLog(`Computer uses ${oppMove.name}`);
            setHealth(health - (oppMove.power / 2));
        }, 1000)
        setTimeout(() => {
            setLog('Waiting for commands...');
            setMenu('action');
        }, 1500)
    };

    return (
        <div className="moves-buttons">
            <button onClick={handleClick}>{move1?.name}</button>
            <button onClick={handleClick}>{move2?.name}</button>
            <button onClick={handleClick}>{move3?.name}</button>
            <button onClick={handleClick}>{move4?.name}</button>
        </div>
    );
}

export default MovesButtons;