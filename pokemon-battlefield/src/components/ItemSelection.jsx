const ItemSelection = ({ setCurrentOption }) => {
    
    const clickHandler = () => {
        setCurrentOption('pokemon');
    }

    return (
        <div>
            <h1>Item Selection</h1>
            <button onClick={clickHandler}>go to pokemon</button>
        </div>
    );
};

export default ItemSelection;