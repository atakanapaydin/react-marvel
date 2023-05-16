import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";

function Cards({cards}) {
    return ( <div className="cards-container container">
        {
            cards.map((card) => (
                <Card key={card.id} card={card} />
            ))
        }

    </div> );
}

export default Cards;