import Card from "./Card";

function CardList({ hogs }) {

    const hogArray = hogs.map(hog => {
        return <Card key={hog.id} name={hog.name} image={hog.image}/>
    })

    return (
        <div className="ui grid container">
                <ul className="ui eight wide column">
                    {hogArray}
                </ul>
        </div>
    )
};

export default CardList;