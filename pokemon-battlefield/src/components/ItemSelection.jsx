const ItemSelection = ({ setCurrentOption }) => {
    
    const clickPageHandler = () => {
        setCurrentOption('pokemon');
    }

    return (
        <div>
            <h1>Item Selections</h1>
            <button onClick={clickPageHandler}>Go to Select Pokemons</button>
        </div>
    );
};

export default ItemSelection;