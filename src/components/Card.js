function Card({name, image}) {
    return (
        
        <li className="pigTile">
            <h1>{name}</h1>
            <img src={image} alt={name} />
        </li>
    
    )
};

export default Card;