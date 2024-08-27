import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

const BattleLog = () => {
    const message = useContext(PokemonContext).logMessage;
    return (<h1>{message}</h1>);
};

export default BattleLog;