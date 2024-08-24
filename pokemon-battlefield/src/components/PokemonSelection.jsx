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
    // console.log('Hello');
    // console.log(nameEntry, typeEntry, genEntry);
    const [error, setError] = useState();
    // use the context given the state of PokemonContext, but only use setAllPokemon funct 
    // const setPokemon = useContext(PokemonContext).setAllPokemon; 

    // need to consider on how it would tell the difference between searching name, type, and/or gen 

    // user enters a pokemon name
    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon/${nameEntry}/`);
            if (data) settingName(data.filter((pokemon) => pokemon.name.includes(nameEntry.toLowerCase())));
            // console.log(data);
            if (error) setError(error);
        };
        doFetch();
    }, [nameEntry]);

    // user picks a pokemon type
    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/type/${typeEntry}/`);
            if (data) settingType(data.filter((pokemon) => pokemon.results.name.includes(typeEntry.toLowerCase())));
            // console.log(data);
            if (error) setError(error);
        };
        doFetch();
    }, [typeEntry]);

    // user picks a pokemon gen
    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon/${genEntry}/`);
            // need to adjust the formatting, ex: generation i !== generation-i
            if (data) settingGen(data.filter((pokemon) => pokemon.sprite.versions.includes(genEntry.toLowerCase())));
            // console.log(data);
            if (error) setError(error);
        };
        doFetch();
    }, [genEntry]);

    if (error) return <p>{error.message}</p>

    return (
        // delete the <br> tags later, when doing CSS 
        <>
        <p>Hello!</p>
        <div className="ui search">
            <h1>Pokemon Selections</h1>
            <form>
                <div className="name-search-container">
                    <h3>Enter A Pokemon Name Here:</h3>
                    <input className="prompt" placeholder="Search by Name..." value={nameEntry} onChange={(e) => settingName(e.target.value)} />
                </div>
                <div className="type-or-gen-container">
                    {/* plan: these should be drop-downs, or radio buttons otherwise  */}
                    <h3>Choose A Pokemon Type Here:</h3>
                    <select name="types" id="types">
                        <option value="-">-</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="ground">ground</option>
                        <option value="psychic">psychic</option>
                        {/* adding more later */}
                    </select>
                    {/* <input className="prompt" placeholder="-" value={typeEntry} onChange={(e) => settingType(e.target.value)} /> */}
                    <br />

                    <h3>Choose A Pokemon Generation Here:</h3>
                    {/* do the same like type */}
                    <input className="prompt" placeholder="-" value={genEntry} onChange={(e) => settingGen(e.target.value)} />
                </div>
            </form>
        </div>
        <br />
        <button onClick={clickPageHandler}>Go to Select Items</button>
        </>
    )
}

export default PokemonSelection;