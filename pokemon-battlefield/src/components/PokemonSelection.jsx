import { useState, useEffect, useContext } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "../context/PokemonContext";
import PokemonTabStats from "./PokemonTabStats";

const PokemonSelection = ({ setCurrentOption }) => {
    const clickPageHandler = () => {
        setCurrentOption('item');
    }

    const listAllPokemons = () => {
        const allPokemon = useContext(PokemonContext).allPokemon;
        console.log(allPokemon)
        console.log('Hello');
        return allPokemon;
    }

    const [nameEntry, settingName] = useState('');
    const [typeEntry, settingType] = useState('');
    const [genEntry, settingGen] = useState('');
    console.log(nameEntry, typeEntry, genEntry);
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

    // user picks a pokemon type and/or gen type 
    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/type/${typeEntry}/`);
            if (data) settingType(data.filter((pokemon) => pokemon.results.name.includes(typeEntry.toLowerCase())));
            // console.log(data);
            if (error) setError(error);
        };
        doFetch();
    }, [typeEntry]);

    if (error) return <p>{error.message}</p>

    return (
        // delete the <br> tags later, when doing CSS!!  
        <>
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
                    <select name="gens" id="gens">
                        <option value="-">-</option>
                        <option value="some-gen">some gen</option>
                        <option value="some-gen">some gen</option>
                        <option value="some-gen">some gen</option>
                        <option value="some-gen">some gen</option>
                        <option value="some-gen">some gen</option>
                        {/* adding more later */}
                    </select>
                    {/* <input className="prompt" placeholder="-" value={genEntry} onChange={(e) => settingGen(e.target.value)} /> */}
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        <br />
        <button onClick={clickPageHandler}>Go to Select Items</button>

        <div className="ui six cards">
            {listAllPokemons?.map(pokemon => <PokemonTabStats key={pokemon.id} name={pokemon.name} type={pokemon[0].type.name} sprite={pokemon.sprites.front_default} />)}
        </div>
        </>
    )
}

export default PokemonSelection;