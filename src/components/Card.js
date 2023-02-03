function Card({name, image}) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
        </div>
    )
};

export default Card;