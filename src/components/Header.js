import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/kcal.png'

const Header = () => {
  return (
    <div className="ui massive secondary pointing menu">
      <Link to="/" className="header item">
        <img src={Logo} className='ui mini image' alt='logo'/>
        Calorie Tracker

      </Link>

      <div className="right menu">
        <Link to="/logs" className="header item">
          Today's Log
        </Link>

        <Link to='/profile' className='header item'>
          My Account
        </Link>

    </div>


    </div>
  );
};

export default Header;
