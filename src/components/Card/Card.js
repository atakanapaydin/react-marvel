function Card({card}) {
    return ( <div>
        <img src={card.thumbnail.path + ".jpg"} alt="asd" />

    </div> );
}

export default Card;