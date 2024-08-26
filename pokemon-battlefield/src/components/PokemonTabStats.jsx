import { useState } from "react";

const PokemonTabStats = ({name, type, sprite}) => {
    // const [statsVisibility, changeStatsVisibility] = useState(hidden);

    // const clickHandle = () => {
    //     if (statsVisibility === hidden) changeStatsVisibility(showing);
    //     else changeStatsVisibility(closed);
    // }

    return (
        <div className="ui card">
            <div className="name" onClick ={clickHandle}>
                <div className="header">{name}</div>
            </div>
            <div className="poke-stats">
                <div className="type">
                    <div className="header">{type}</div>
                </div>
                <div className="image">
                    <img alt="pokemon name" src={sprite} />
                </div>
             </div>
        </div>
    )
}

export default PokemonTabStats