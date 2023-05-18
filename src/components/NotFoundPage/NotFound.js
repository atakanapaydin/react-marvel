import React from 'react';

//Router and Links
import {Link} from 'react-router-dom';

//Styles
import './NotFound.scss';

export const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="text-center">
          <div className="not-found-bg">
            <h1 className="text-center ">404</h1>
          </div>
          <div className="not-found-page-content">
            <h3>Look like you're lost</h3>
            <p>the page you are looking for not avaible!</p>
            <Link to="/" className="link">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
