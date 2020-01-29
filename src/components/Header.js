import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/kcal.png'
import { connect } from 'react-redux'
import { Menu, Dropdown, Image, Responsive } from 'semantic-ui-react'
import { logOut } from '../actions'

const Header = (props) => {
  const renderLinks = () => {
    if (props.token) {
      return (
        <>
          {/* Mobile View */}
          <Responsive
            {...Responsive.onlyMobile}
            as={Menu.Menu}
            position='right'
          >
            <Menu.Item as={NavLink} to='/logs'>
              Today's Log
            </Menu.Item>
            <Dropdown item simple icon='bars' >
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/profile'>Goals</Dropdown.Item>
                <Dropdown.Item onClick={() => props.logOut()}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Responsive>

          {/* Desktop view */}
          <Responsive
            as={Menu.Item}
            position='right'
            minWidth={Responsive.onlyTablet.minWidth}>
            <Menu.Item as={NavLink} to='/logs'>
              Today's Log
            </Menu.Item>
            <Dropdown simple item text='My Account'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/profile'>Goals</Dropdown.Item>
                <Dropdown.Item onClick={() => props.logOut()}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Responsive>
        </>
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
