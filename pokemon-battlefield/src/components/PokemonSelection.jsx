const PokemonSelection = ({ setCurrentOption }) => {
    
    const clickHandler = () => {
        setCurrentOption('item');
    }

    return (
        <div>
            <h1>Pokemon Select</h1>
            <button onClick={clickHandler}>Go to item</button>
        </div>
    );
};

export default PokemonSelection;