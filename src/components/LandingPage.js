import React, { Component } from 'react';
import Logo from '../images/kcal.png'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
class LandingPage extends Component {

  render() {

    return (
      <>
        {this.props.token ? (
          <Redirect to="/logs" />
        ) : (
          <Redirect to="/login" />
        )}
        <h1 className='ui centered header'>
          <img src={Logo} className='ui large image' alt='logo'/>
          Calorie Tracker
        </h1>
        
        <div className="ui placeholder segment" >
          <div className="ui two column very relaxed stackable grid" >
            <div className="column">

              <div className="ui blue submit button">Login</div>

            </div>
            <div className="middle aligned column">
              <div className="ui big button">
                <i className="signup icon"></i>
                Sign Up
              </div>
            </div>
          </div>
          <div className="ui vertical divider">
            Or
          </div>
        </div>
      </>
    );
  }

}
const mapStateToProps = ({ auth: { token }}) => ({token})

export default connect(mapStateToProps)(LandingPage)
