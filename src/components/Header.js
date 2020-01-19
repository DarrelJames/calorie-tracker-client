import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="ui massive secondary pointing menu">
      <Link to="/" className="item">
        Calorie Tracker
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          Today's Log
        </Link>

        <Link to='#' className='item'>
          My Account
        </Link>

    </div>


    </div>
  );
};

export default Header;
