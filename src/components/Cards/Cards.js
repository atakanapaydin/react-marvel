import React, {useState, useEffect} from 'react';

//Fetch data
import axios from 'axios';

//Components
import Card from '../Card/Card';

//Styles
import './Cards.scss';

const hash = 'ff3b82a7cd96886233bd42fc84692ce2';

function Cards({loading, setLoading}) {
  const [cards, setCards] = useState([]);
  const [limit, setLimit] = useState(30);

  const fetchCharacter = async () => {
    setLoading(true);
    const response = await axios(
      `http://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&offset=0&apikey=5eca9a8c11d108d16875553bc8cf7aa0&hash=${hash}`
    );
    setCards(response.data.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacter();
  }, [limit]);

  const loadingIs = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }
  };

  if (limit < 100) {
    var handleScroll = e => {
      let endList = window.scrollY + window.innerHeight === document.documentElement.scrollHeight;
      if (endList) {
        setLimit(limit + 10);
        loadingIs();
      }
    };
  }

  const a = () => {
    if (loading) {
      const app = document.querySelector('.App');
      app.style.overflow = 'hidden';
    }
  };
  a();
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className="cards-container container">
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
}

export default Cards;
