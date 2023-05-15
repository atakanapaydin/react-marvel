import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";

function Cards({cards}) {
    return ( <div>
        {
            cards.map((card) => (
                <Card key={card.id} card={card} />
            ))
        }

    </div> );
}

export default Cards;