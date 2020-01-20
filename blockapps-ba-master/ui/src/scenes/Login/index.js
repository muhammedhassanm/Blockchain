import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import Paper from 'react-md/lib/Papers';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import { reduxForm, Field } from 'redux-form';
import { userLoginSubmit } from './login.actions';
import ReduxedTextField from '../../components/ReduxedTextField/';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import mixpanel from 'mixpanel-browser';
import './Login.css';

class Login extends Component {

  submit = (values) => {
    mixpanel.track('login_click');
    this.props.userLoginSubmit(values.username, values.password);
  }

  render() {
    const {
      // login,
      handleSubmit
    } = this.props;

    return (
      <div className="md-grid md-toolbar--relative login-margin-top">
        <div className="md-cell md-cell--3-desktop md-cell--2-tablet md-cell--phone-hidden" />
        <div className="md-cell md-cell--6-desktop md-cell--8-tablet md-cell--12-phone">
          <Card>
            <Media>
              <img src="img/supply-chain.jpeg" alt="Login splash" />
              <MediaOverlay>
                <CardTitle title="Blockchain Enabled SCM" >
                </CardTitle>
              </MediaOverlay>
            </Media>
            <Paper className="login-paper" zDepth={3}>
              <form onSubmit={handleSubmit(this.submit)}>
                <div className="md-grid">
                  <div className="md-cell md-cell--2-desktop md-cell--1-tablet md-cell--1-phone" />
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    label="Enter Username"
                    className="md-cell md-cell--8-desktop md-cell--10-tablet md-cell--10-phone"
                    component={ReduxedTextField} />
                  <div className="md-cell md-cell--2-desktop md-cell--1-tablet md-cell--1-phone" />
                  <div className="md-cell md-cell--2-desktop md-cell--1-tablet md-cell--1-phone" />
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    label="Enter Password"
                    className="md-cell md-cell--8-desktop md-cell--10-tablet md-cell--10-phone"
                    component={ReduxedTextField} />
                  <div className="md-cell md-cell--2-desktop md-cell--1-tablet md-cell--1-phone" />
                  <div className="md-cell md-cell--2-desktop md-cell--1-tablet md-cell--1-phone" />
                  <div className="md-cell md-cell--8-desktop md-cell--10-tablet md-cell--10-phone md-text-right login-cell">
                    <Button raised primary label="Login" type="submit" />
                  </div>
                  <div className="md-cell md-cell--2-desktop md-cell--1-tablet md-cell--1-phone" />
                </div>
              </form>
            </Paper>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

const connected = connect(mapStateToProps, { userLoginSubmit })(Login);

const formedComponent = reduxForm({ form: 'login'})(connected);

export default formedComponent;
