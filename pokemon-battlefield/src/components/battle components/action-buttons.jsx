import { useNavigate } from "react-router-dom";

const ActionButtons = ({ setter }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        setter('moves');
    }
    const handleClick2 = () => {
        navigate('/');
    };
    return (
        <div className="action-buttons">
            <button onClick={handleClick} className='fightButton'>Fight</button>
            <button className='bagButton'>Bag (WIP)</button>
            <button className='swapButton'>Swap (WIP)</button>
            <button onClick={handleClick2} className='backButton'>Back to Main</button>
        </div>
    )
}

export default ActionButtons;