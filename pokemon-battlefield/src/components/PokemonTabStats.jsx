import { useState } from "react";

const PokemonTabStats = ({name, type, pp, target, power}) => {
    const [statsVisibility, changeStatsVisibility] = useState(hidden);

    const clickHandle = () => {
        if (statsVisibility === hidden) changeStatsVisibility(showing);
        else changeStatsVisibility(closed);
    }

    return (
        <div className="ui card">
            <div className="name" onClick ={clickHandle}>
                <div className="header">{name}</div>
            </div>
            <div className="poke-stats">
                <div className="type">
                    <div className="header">{type}</div>
                </div>
                <div className="pp">
                    <div className="header">{pp}</div>
                </div>
                <div className="target">
                    <div className="header">{target}</div>
                </div>
                <div className="power">
                    <div className="header">{power}</div>
                </div>
                {/* move the section below later? */}
                {/* <div className="image">
                    <img alt="pokemon name" src={img} />
                </div> */}
             </div>
        </div>
    )
}

export default PokemonTabStats