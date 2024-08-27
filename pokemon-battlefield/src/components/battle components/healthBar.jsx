const HealthBar = ({ hp, maxHp }) => {
    const widthPercentage = (hp/maxHp) * 100
    return(
      <div className='life-bar-container'>
        <div className='life-bar'
        style={{width: `${widthPercentage}%`}}
        ></div>
      </div>
    )
}

export default HealthBar;