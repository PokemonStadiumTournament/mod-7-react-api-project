import { useContext, useEffect } from "react";
import PokemonContext from "../context/PokemonContext";
import BattleData from "../components/battle components/battleStuff";
import handleFetch from "../utils/handleFetch";

const BattlePage = () => {
    const p1 = useContext(PokemonContext).playerPokemon;
    const botUrl = useContext(PokemonContext).allPokemon[Math.floor(Math.random() * (8 - 0 + 1) + 0)].url;
    const setOpp = useContext(PokemonContext).setOpp;
    const setMoves = useContext(PokemonContext).setMoves1;
    const p1moves = [];

    for (let i = 0; i < 4; i++) {
        p1moves.push(p1?.moves[Math.floor(Math.random() * ((p1?.moves.length - 1) - 0 + 1) + 0)]);
    };
    
    useEffect(() => {
        const moveArr = [];
        const fetchMove1 = async() => {
            const [data, error] = await handleFetch(p1moves[0].move.url);
            if (data) moveArr.push(data);
            if (error) setError(error)
        };
        fetchMove1();
        const fetchMove2 = async() => {
            const [data, error] = await handleFetch(p1moves[1].move.url);
            if (data) moveArr.push(data);
            if (error) setError(error)
        };
        fetchMove2();
        const fetchMove3 = async() => {
            const [data, error] = await handleFetch(p1moves[2].move.url);
            if (data) moveArr.push(data);
            if (error) setError(error)
        };
        fetchMove3();
        const fetchMove4 = async() => {
            const [data, error] = await handleFetch(p1moves[3].move.url);
            if (data) moveArr.push(data);
            if (error) setError(error)
        };
        fetchMove4();
        setMoves(moveArr);
        const fetchOpp = async() => {
            const [data, error] = await handleFetch(botUrl);
            if (data) setOpp(data);
            if (error) console.error(error);
        };
        fetchOpp();
    }, []);
    
    return (
        <BattleData className='battleButtons'/>
    );
};

export default BattlePage;