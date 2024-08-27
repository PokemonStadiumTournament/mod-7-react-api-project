import { useState } from "react";

const HealthBar = ({ hp, maxHp }) => {
    const widthPercentage = (hp/maxHp) * 100
    let color = '#4caf50';
    if (hp <= 75) color = 'yellow';
    if (hp <= 25) color = 'red';
    return(
      <div className='life-bar-container'>
        <div className='life-bar'
        style={{width: `${widthPercentage}%`, backgroundColor: `${color}`}}
        ></div>
      </div>
    )
}

export default HealthBar;