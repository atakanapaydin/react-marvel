import React, { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import axios from 'axios';
const hash = 'ff3b82a7cd96886233bd42fc84692ce2';
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5eca9a8c11d108d16875553bc8cf7aa0&hash=${hash}`);
      console.log(response.data.data.results);
      setCards(response.data.data.results);
    }
    fetchCards();
  }, []);

  return (
    <div className="App">
      <div>
        <Header />
        <Cards cards={cards} />
      </div>
    </div>
  );
}

export default App;