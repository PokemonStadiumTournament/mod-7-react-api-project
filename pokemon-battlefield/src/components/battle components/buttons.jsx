import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./action-buttons";
import MovesButtons from "./moves-buttons";
import PokemonContext from "../../context/PokemonContext";

const BattleButtons = () => {
    const navigate = useNavigate();
    const [currMenu, setMenu] = useState('action');
    const playerData = useContext(PokemonContext).playerPokemon;
    const playerHealth = useContext(PokemonContext).playerHealth;
    const oppData = useContext(PokemonContext).oppPokemon;
    const oppHealth = useContext(PokemonContext).oppHealth;
    const setLog = useContext(PokemonContext).setLog;
    const setWinner = useContext(PokemonContext).setWinner;
    const setWinnerPokemon = useContext(PokemonContext).setWinnerPokemon;

    if (oppHealth <= 0) {
        setLog(`${oppData.name} has fainted`);
        setWinner('The Player');
        setWinnerPokemon(playerData);
        setTimeout(() => {
            navigate('/result');
        }, 500);
    };

    if (playerHealth <= 0) {
        setLog(`${playerData.name} has fainted`);
        setWinner('The CPU');
        setWinnerPokemon(oppData);
        setTimeout(() => {
            navigate('/result');
        }, 500);
    };

    if (currMenu === 'action') return <ActionButtons setter={setMenu} />;
    else if (currMenu === 'moves') return <MovesButtons setMenu={setMenu} />;
    else return (<></>);
};

export default BattleButtons;