import React from 'react';

//Router and Link
import {Link} from 'react-router-dom';

//Styles
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header-link">
        {' '}
        <img src="https://logowik.com/content/uploads/images/marvel.jpg" alt="Marvel Logo" className="banner-img" />
      </Link>
    </div>
  );
}

export default Header;
