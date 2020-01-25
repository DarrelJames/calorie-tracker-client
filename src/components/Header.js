import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/kcal.png'
import LogOut from './LogOut'
import { connect } from 'react-redux'
const Header = ({token}) => {
  const renderLinks = () => {
    if (token) {
      return (
        <div className="right menu">
          <Link to="/logs" className="header item">
            Today's Log
          </Link>

          <Link to='/profile' className='header item'>
            My Account
          </Link>

          <LogOut />
      </div>
      )
    }
  }
  return (
    <div className="ui massive secondary pointing menu">
      <Link to="/" className="header item">
        <img src={Logo} className='ui mini image' alt='logo'/>
        Calorie Tracker
      </Link>

      {renderLinks()}

    </div>
  );
};
const mapStateToProps = ({ auth: {token}}) => {
  return {token}
}

export default connect(mapStateToProps)(Header);
