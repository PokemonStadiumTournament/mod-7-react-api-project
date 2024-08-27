import { useState, useEffect, useContext } from "react";
import handleFetch from "../../utils/handleFetch";
import BattleButtons from "./buttons";
import HealthBar from "./healthBar";
import BattleLog from "./battleMessage";
import PokemonContext from "../../context/PokemonContext";

const BattleData = () => {
    const p1 = useContext(PokemonContext).playerPokemon;
    const opp = useContext(PokemonContext).oppPokemon;

    const health1 = useContext(PokemonContext).playerHealth;
    const health2 = useContext(PokemonContext).oppHealth;

    return (
        <div>
            <div className="pokemon-sprites">
                <div className='playerPokemonRender'>
                    <img
                        alt='player 1 Pokemon'
                        className='p1pokemon'
                        src={p1?.sprites.back_default}
                    />
                    <HealthBar hp={health1} maxHp={100} />
                </div>
                <div>
                    <img
                        alt='player 2 Pokemon'
                        className='p2pokemon'
                        src={opp?.sprites.front_default}
                    />
                    <HealthBar hp={health2} maxHp={100}/>
                </div>
            </div>
            <BattleLog />
            <BattleButtons />
        </div>
    );
}

export default BattleData;