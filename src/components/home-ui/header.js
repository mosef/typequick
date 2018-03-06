import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TypeWriter from '../../img/TypeWriter.png';
import SpaceBar from '../../img/SpaceBar.png';
import { HeaderImg } from './HeaderItems';
import { signUpClick } from '../../actions/RegisterActions';
import SignUpForm from '../forms/signupForm';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header />
        {this.props.clicked ?
          <SignUpForm /> :
          <div className="headerText">
            <h1>TypeQuick<span>_</span></h1>
            <h2>A learning tool to code faster</h2>
            <button onClick={() => { this.props.signUpClick(); }} className="signUp-Button"> SignUp </button>
          </div>}
        <HeaderImg image={TypeWriter} name="TypeWriter" />
        <Link to="/login" className="login-Link">
          <h3>Login</h3>
          <HeaderImg image={SpaceBar} name="SpaceBar" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clicked: state.homeReducer.clicked,
});

export default connect((mapStateToProps), { signUpClick })(Header);
