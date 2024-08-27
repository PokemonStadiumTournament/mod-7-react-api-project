import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./action-buttons";
import MovesButtons from "./moves-buttons";

const BattleButtons = ({ moveArr, oppData, health1, health2, setHealth1, setHealth2}) => {
    const [currMenu, setMenu] = useState('action');
    return currMenu === 'action' ? <ActionButtons setter={setMenu} /> : <MovesButtons setMenu={setMenu} moveArr={moveArr} oppData={oppData} health={health1} setHealth={setHealth1} oppHealth={health2} setOppHealth={setHealth2} />;
};

export default BattleButtons;