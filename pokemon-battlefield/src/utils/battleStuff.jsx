import { useState, useContext, useEffect } from "react";
import PokemonContext from "../context/PokemonContext";
import handleFetch from "../utils/handleFetch";
import BattleButtons from "../components/battle components/buttons";

const BattleData = ({ player1Pokemon, player2Pokemon, player1Item = {}, player2Item = {} }) => {
    const player1Moves = player1Pokemon.moves;
    console.log(player1Moves);


        return (
            <div>
                <div className="pokemon-sprites">
                    <img
                        alt='player 1 Pokemon'
                        className='p1pokemon'
                        src={player1Pokemon.sprites.back_default}
                    />
                    <img
                        alt='player 2 Pokemon'
                        className='p2pokemon'
                        src={player2Pokemon.sprites.front_default}
                    />
                </div>
                <BattleButtons/>
            </div>
        )

}

export default BattleData;