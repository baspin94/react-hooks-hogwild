
import Card from "./Card";

function CardList({ hogs }) {

    

    const hogArray = hogs.map(hog => {
        const medal = hog["highest medal achieved"]
        return <Card key={hog.id} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={medal}/>
    })

    return (
        <div className="ui grid container">
            {hogArray}
        </div>
    )
};

export default CardList;