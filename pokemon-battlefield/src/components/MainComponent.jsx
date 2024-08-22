const MainComponent = () => {
    const pokemon = useContext(PokemonContext).allPokemon;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/selection');
    };

    return (
        <>
            <h1>Pokemon Battlefield</h1>
            <img
                alt='hi'
                className='logoPokemon'
                src={''}
            />
            <button onClick={handleClick}>Start Simulation</button>
        </>
    );
};

export default MainComponent;