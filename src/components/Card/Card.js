//Router and Link
import {Link} from 'react-router-dom';

//Styles
import '../Card/Card.scss';

function Card({card}) {
  return (
    <>
      <Link to={`detail/${card.id}`} className="card-container">
        <div className="card-img">
          <img src={card.thumbnail.path + '.' + card.thumbnail.extension} alt={card.name} loading=" lazy" />
        </div>
        <div className="card-info">
          <h3>{card.name}</h3>
          <p>{card.modified.split('-', 1)}</p>
        </div>
      </Link>
    </>
  );
}

export default Card;
