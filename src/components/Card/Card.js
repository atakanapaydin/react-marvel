import '../Card/Card.scss'

function Card({card}) {
    return ( 
    <a href={card.comics.collectionURI} className="card-container">
        <div className="card-img">
            <img src={card.thumbnail.path + "."+card.thumbnail.extension} alt={card.name} />
        </div>
        <div className="card-info">
            <h3>{card.name}</h3>
            <p>{card.modified.split('-', 1)}</p>
        </div>
    </a> 
    );
}

export default Card;