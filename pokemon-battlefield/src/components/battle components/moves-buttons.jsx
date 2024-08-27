import { useEffect } from "react";
import handleFetch from "../../utils/handleFetch";

const MovesButtons = ({ turn, setTurn, setMenu, moveArr, oppHealth, setOppHealth }) => {
    const moves = [];

    useEffect(() => {
        const fetchMove1 = async() => {
            const [data, error] = await handleFetch(moveArr[0].move.url);
            if (data) moves.push(data);
            if (error) setError(error)
        };
        fetchMove1();
        const fetchMove2 = async() => {
            const [data, error] = await handleFetch(moveArr[1].move.url);
            if (data) moves.push(data);
            if (error) setError(error)
        };
        fetchMove2();
        const fetchMove3 = async() => {
            const [data, error] = await handleFetch(moveArr[2].move.url);
            if (data) moves.push(data);
            if (error) setError(error)
        };
        fetchMove3();
        const fetchMove4 = async() => {
            const [data, error] = await handleFetch(moveArr[3].move.url);
            if (data) moves.push(data);
            if (error) setError(error)
        };
        fetchMove4();
    }, []);

    console.log(moves);

    const handleClick = () => {
        setOppHealth(oppHealth - 10);
        turn === 'p1' ? setTurn('p2') : setTurn('p1');
        console.log(`Now it's ${turn}'s turn.`);
        setMenu('action')
    };

    return (
        <div className="moves-buttons">
            <button onClick={handleClick}>{moves[0].name}</button>
            <button onClick={handleClick}>{moves[1].name}</button>
            <button onClick={handleClick}>{moves[2].name}</button>
            <button onClick={handleClick}>{moves[3].name}</button>
        </div>
    )
}

export default MovesButtons;