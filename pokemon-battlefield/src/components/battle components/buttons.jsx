import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./action-buttons";
import MovesButtons from "./moves-buttons";

const BattleButtons = ({ moveArr, oppData, health1, health2, setHealth1, setHealth2}) => {
    const [currMenu, setMenu] = useState('action');
    if (currMenu === 'action') return <ActionButtons setter={setMenu} />;
    else if (currMenu === 'moves') return <MovesButtons setMenu={setMenu} moveArr={moveArr} oppData={oppData} health={health1} setHealth={setHealth1} oppHealth={health2} setOppHealth={setHealth2} />;
    else return (<></>);
};

export default BattleButtons;