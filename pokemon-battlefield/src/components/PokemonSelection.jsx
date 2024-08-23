import { useState, useEffect, useContext } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "../context/PokemonContext";

const PokemonSelection = ({ setCurrentOption }) => {
    const clickPageHandler = () => {
        setCurrentOption('item');
    }

    const [nameEntry, settingName] = useState('');
    const [typeEntry, settingType] = useState('');
    const [genEntry, settingGen] = useState('');
    // console.log(userEntry);
    const [error, setError] = useState();
    // use the context given the state of PokemonContext, but only use setAllPokemon funct 
    const setPokemon = useContext(PokemonContext).setAllPokemon; 

    useEffect(() => {
        const doFetch = async () => {
        const [data, error] = await handleFetch('http://localhost:4000/pokemon');
            // need to consider on how it would tell the difference between searching name, type, and/or gen 
            if (data) setPokemon(data.filter((pokemon) => pokemon.name.includes(nameEntry.toLowerCase())));
            // console.log(data);
            if (error) setError(error);
        };
        doFetch();
    }, [nameEntry]);

    if (error) return <p>{error.message}</p>

    return (
        <>
        <p>Hello!</p>
        <div className="ui search">
            <h1>Pokemon Selections</h1>
            <form>
                <div className="name-search-container">
                    <input className="prompt" placeholder="Search by Name..." value={nameEntry} onChange={(e) => settingName(e.target.value)} />
                </div>
                <div className="type-or-gen-container">
                    {/* plan: these should be drop-downs, or radio buttons otherwise  */}
                    <input className="prompt" placeholder="-" value={typeEntry} onChange={(e) => settingType(e.target.value)} />
                    <input className="prompt" placeholder="-" value={genEntry} onChange={(e) => settingGen(e.target.value)} />
                </div>
            </form>
        </div>
        <button onClick={clickPageHandler}>Go to Select Items</button>
        </>
    )
}

export default PokemonSelection;