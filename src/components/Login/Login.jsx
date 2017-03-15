import React, { Component } from 'react';
import logo from '../../assets/images/login-logo.png';
import { Form } from 'antd';
import LoginForm from './Form.jsx';
import { NavigateActions, LoginActions } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onClickSignup = this.onClickSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Navigate to signup page
  onClickSignup(e) {
    e.preventDefault();
    this.props.navigateTo('/signup');
  }

  //validates accountName password and navigate to home page
  handleSubmit(e) {
    this.props.login(e.accountName, e.password);
  }

  render() {
    return (
      <div className='sportsbg' id='main-content'>
        <div className='loginComponent' >
          <div className='wrapper'>
            <div className='text-center'>
              <img src={ logo } alt=''/>
              <h2 className='login-welcome'> Welcome to Application </h2>
              <div className='center-ele'>
                <LoginForm onClickSignup={ this.onClickSignup }
                  onSubmit={ this.handleSubmit.bind(this) } errors={ this.props.errors } status={ this.props.status } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    errors:state.login.errors,
    status:state.login.status
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navigateTo: NavigateActions.navigateTo,
    login: LoginActions.login
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))
