import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./action-buttons";
import MovesButtons from "./moves-buttons";

const BattleButtons = () => {
    const [currMenu, setMenu] = useState('action');
    if (currMenu === 'action') return <ActionButtons setter={setMenu} />;
    else if (currMenu === 'moves') return <MovesButtons setMenu={setMenu} />;
    else return (<></>);
};

export default BattleButtons;