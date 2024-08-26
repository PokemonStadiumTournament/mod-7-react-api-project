import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./action-buttons";
import MovesButtons from "./moves-buttons";

const BattleButtons = ({ turn, setTurn, moveArr1, moveArr2, health1, health2, setHealth1, setHealth2}) => {
    const navigate = useNavigate();
    const [currMenu, setMenu] = useState('action');

    return currMenu === 'action' ? <ActionButtons setter={setMenu} /> : <MovesButtons setTurn={setTurn} setMenu={setMenu} turn={turn} moveArr={turn === 'p1' ? moveArr1 : moveArr2} oppHealth={turn === 'p1' ? health2 : health1} setOppHealth={turn === 'p1' ? setHealth2 : setHealth1}/>;
};

export default BattleButtons;