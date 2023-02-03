import { useState } from 'react'
function Card({name, image, specialty, weight, greased, medal}) {
    
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(!isClicked)
    }

    const divStyle = {
        display: isClicked ? "block" : "none"
    }

    return (
        
        <div onClick={handleClick} className="ui eight wide column">
            <h1>{name}</h1>
            <img className ="minPigTile" src={image} alt={name} />
            <div style={divStyle}>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased: {greased ? "Yes" : "No"}</p>
                <p>Medal: {medal}</p>
            </div>
        </div>
    
    )
};

export default Card;