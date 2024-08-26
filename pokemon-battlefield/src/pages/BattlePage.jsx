import { useState, useContext, useEffect } from "react";
import PokemonContext from "../context/PokemonContext";
import handleFetch from "../utils/handleFetch";
import BattleData from "../utils/battleStuff";
import Loading from "../components/loading";

const BattlePage = () => {
    const pokemon1 = useContext(PokemonContext).allPokemon[0];
    const pokemon2 = useContext(PokemonContext).allPokemon[1];

    const [p1p, setPlayer1] = useState(pokemon1);
    const [p2p, setPlayer2] = useState(pokemon2);
    
    useEffect(() => {
        const fetchPokemon1 = async() => {
            const [data, error] = await handleFetch(p1p.url);
            console.log(data);
            if (data) setPlayer1(data);
            if (error) setError(error)
        }
        const fetchPokemon2 = async() => {
            const [data, error] = await handleFetch(p2p.url);
            if (data) setPlayer2(data);
            if (error) setError(error)
        }
        fetchPokemon1();
        fetchPokemon2();
    }, []);

    const [component, setComponent] = useState(<Loading/>);

    useEffect(() => {
        setComponent(<BattleData player1Pokemon={p1p} player2Pokemon={p2p}/>);
    }, [p1p, p2p])

    return (
        <>
        <h1>battle</h1>
        {component}
        </>
    );
};

export default BattlePage;