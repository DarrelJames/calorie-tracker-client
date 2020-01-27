import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/kcal.png'
import { connect } from 'react-redux'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { logOut } from '../actions'

const Header = (props) => {
  const renderLinks = () => {
    if (props.token) {
      return (
        <Menu.Item position='right'>
          <Menu.Item as={NavLink} to='/logs'>
            Today's Log
          </Menu.Item>
          <Dropdown item text='My Account'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/profile'>Goals</Dropdown.Item>
              <Dropdown.Item onClick={() => props.logOut()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      )
    }
  }

  return (
    <Menu>
      <Menu.Item as={Link} to="/">
        <Image src={Logo} size='mini' alt='logo'/>
        Calorie Tracker
      </Menu.Item>

      {renderLinks()}
    </Menu>
  )
}

const mapStateToProps = ({ auth: {token}}) => {
  return {token}
}

export default connect(mapStateToProps, { logOut })(Header);
