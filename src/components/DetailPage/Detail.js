import React from 'react';
import {useEffect, useState} from 'react';

// UseParams for get id from url
import {useParams, Link} from 'react-router-dom';

//Fetch data
import axios from 'axios';

//Styles
import './Detail.scss';

const apikey = '5eca9a8c11d108d16875553bc8cf7aa0';

export const Detail = ({loading, setLoading}) => {
  const {id} = useParams();

  const [hero, setHero] = useState([]);

  useEffect(() => {
    const fetchHero = async () => {
        setLoading(true);
      const response = await axios(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${apikey}`);
      setHero(response.data.data.results[0]);
      setLoading(false);
    };
    fetchHero();
  }, [id]);

  const comics = hero.comics?.items.map((comic, index) => {
    return (
      <li key={index}>
        <a href={comic.resourceURI}>{comic.name} </a>
      </li>
    );
  });

  return (
    <>
      <section className="hero-card ">
        <div className="container">
          <Link to="/" className="go-back">
            Go Home
          </Link>

          <div className="hero-container">
            <div className="hero-image">
              <img src={hero.thumbnail?.path + '.' + hero.thumbnail?.extension} alt={hero.name} loading=" lazy" />
            </div>
            <div className="hero-details">
              <h1>{hero.name}</h1>
              <p>{hero.description}</p>
              <h2>Comics</h2>
              <ul>{comics}</ul>
            </div>
          </div>
        </div>
        <div className="hero-item-bg">
          <img src={hero.thumbnail?.path + '.' + hero.thumbnail?.extension} alt={hero.name} />
        </div>
      </section>
      {loading && <div className="loading">Loading...</div>}
    </>
  );
};

export default Detail;
