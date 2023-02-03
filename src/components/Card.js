function Card({name, image}) {
    return (
        
        <div className="ui eight wide column">
            <h1>{name}</h1>
            <img className ="minPigTile" src={image} alt={name} />
        </div>
    
    )
};

export default Card;