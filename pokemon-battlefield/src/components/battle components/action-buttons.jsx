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
            <button onClick={handleClick}>Fight</button>
            <button>Bag</button>
            <button>Swap</button>
            <button onClick={handleClick2}>Back to Main</button>
        </div>
    )
}

export default ActionButtons;