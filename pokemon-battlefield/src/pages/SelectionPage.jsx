import { useContext, useState } from "react";
import PokemonContext from "../context/PokemonContext";

const PokemonSelection = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [gen, setGen] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const postOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name }),
        };

        handleFetch('http://localhost:4000/pokemon', postOption);

        // filter here by name, type, and/or gen? 
    
        // reset the state values after submission.
        setName('');
        setType('');
        setGen('');
        
        // console.log('SUBMITTED!');
    }

    // there should be one for selecting a Pokemon too right? 
    // const handleImgClick = () => {
    //     // show data like name, type, pp, target, power 
    // }

    return (
        <>
            <div id='pokemon-selection-form'>
                <h3>Add A Pokemon!</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <button type="submit">Enter</button>
                </form>
            </div>

            <div id='pokemon-choices-display'>
                <h3>You Can Choose A Pokemon Here!</h3>
                <div>
                    {/* Should map all of the clickable names/tabs of Pokemons that COULD BE selected by user  */}
                    {/* {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} />)} */}
                    {/* Once clicking the tab, the rest of the info like type, pp, target, and power should be shown  */}
                </div>
            </div>            

            <div id='pokemon-selected-display'>
                <h3>These Were Chosen By YOU! </h3>
                <div>
                    {/* Should map all of the images of Pokemons selected by user  */}
                    {/* {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} img={pokemon.img} />)} */}
                </div>
            </div>
        </>
    )
}
const ItemSelection = () => {}

const SelectionPage = () => {
    const pokemon = useContext(PokemonContext).allPokemon;
    const items = useContext(PokemonContext).allItems;
    const [currentOption, setCurrentOption] = useState();
    // need to use setCurrentOption 

    console.log(pokemon);
    console.log(items);

    if(currentOption === 'pokemon') return (<PokemonSelection />);
    else return (<ItemSelection />);

    // return (
    //     <>
    //         <h1>Selection Screen</h1>
    //     </>
    // );
};

export default SelectionPage;