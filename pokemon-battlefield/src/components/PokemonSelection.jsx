import { useState, useEffect, useContext } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "../context/PokemonContext";
import PokemonTabStats from "./PokemonTabStats";
import { useNavigate } from "react-router-dom";

const PokemonSelection = ({ setCurrentOption }) => {
    const navigate = useNavigate();
    const clickPageHandler = () => setCurrentOption('item');

    const allPokemon = useContext(PokemonContext).allPokemon;
    // console.log(allPokemon);

    const [nameEntry, settingName] = useState('');
    const [typeEntry, settingType] = useState('');
    const [genEntry, settingGen] = useState('');
    // console.log(nameEntry, typeEntry, genEntry);
    const [error, setError] = useState();
    // use the context given the state of PokemonContext, but only use setAllPokemon funct 
    // const setPokemon = useContext(PokemonContext).setAllPokemon; 

    // need to consider on how it would tell the difference between searching name, type, and/or gen 

    // user enters a pokemon name
    // useEffect(() => {
    //     const doFetch = async () => {
    //         const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon/${nameEntry}/`);
    //         if (data) settingName(data.filter((pokemon) => pokemon.name.includes(nameEntry.toLowerCase())));
    //         // console.log(data);
    //         if (error) setError(error);
    //     };
    //     doFetch();
    // }, [nameEntry]);

    // // user picks a pokemon type and/or gen type 
    // useEffect(() => {
    //     const doFetch = async () => {
    //         const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/type/${typeEntry}/`);
    //         if (data) settingType(data.filter((pokemon) => pokemon.results.name.includes(typeEntry.toLowerCase())));
    //         // console.log(data);
    //         if (error) setError(error);
    //     };
    //     doFetch();
    // }, [typeEntry]);

    if (error) return <p>{error.message}</p>

    const handleClick = () => {
        navigate('/battle');
    };

    return (
        // delete the <br> tags later, when doing CSS!!  
        <>
        <button onClick={handleClick}>to battle</button>;
        <div className="ui search">
            <h1>Pokemon Selections</h1>
            <form>
                <div className="name-search-container">
                    <h3>Choose From The Available Pokemons Here:</h3>
                    {/* <input className="prompt" placeholder="Search by Name..." value={nameEntry} onChange={(e) => settingName(e.target.value)} /> */}
                    {/* <div class="dropdown">
                        <button class="dropbtn">Pokemons ▼</button>
                        <div class="dropdown-pokemons">
                            <ul>
                                {allPokemon?.map((pokemon, index) => <PokemonTabStats key={index} name={pokemon.name} url={pokemon.url} />)}
                            </ul>
                        </div>
                    </div> */}
                     <div className="pokemon-list-container">
                        <ul className="pokemon-list">
                            {allPokemon?.map((pokemon, index) => <PokemonTabStats key={index} name={pokemon.name} url={pokemon.url} />)}
                        </ul>
                    </div>
                </div>
                <div className="type-or-gen-container">
                    {/* plan: these should be drop-downs, or radio buttons otherwise  */}
                    <h3>Choose A Pokemon Type Here:</h3>
                    <select name="types" id="types">
                        <option value="-">-</option>
                        <option value="dark">dark</option>
                        <option value="dragon">dragon</option>
                        <option value="electric">electric</option>
                        <option value="fairy">fairy</option>
                        <option value="fighting">fighting</option>
                        <option value="fire">fire</option>
                        <option value="flying">flying</option>
                        <option value="ghost">ghost</option>
                        <option value="grass">grass</option>
                        <option value="ground">ground</option>
                        <option value="poison">poison</option>
                        <option value="psychic">psychic</option>
                        <option value="rock">rock</option>
                        <option value="steel">steel</option>
                        <option value="water">water</option>
                    </select>
                    {/* <input className="prompt" placeholder="-" value={typeEntry} onChange={(e) => settingType(e.target.value)} /> */}
                    <br />

                    <h3>Choose A Pokemon Generation Here:</h3>
                    <select name="gens" id="gens">
                        <option value="-">-</option>
                        <option value="some-gen">generation-i</option>
                        <option value="some-gen">some gen</option>
                        <option value="some-gen">some gen</option>
                        <option value="some-gen">some gen</option>
                        <option value="some-gen">some gen</option>
                        {/* adding more later */}
                    </select>
                    {/* <input className="prompt" placeholder="-" value={genEntry} onChange={(e) => settingGen(e.target.value)} /> */}
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        <br />
        <button onClick={clickPageHandler}>Go to Select Items</button>
        </>
    )
}

export default PokemonSelection;