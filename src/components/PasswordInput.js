import React, { Component } from 'react';

class PasswordInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.changePassword = this.changePassword.bind(this);
  }

  changePassword(password){
    this.setState({ password })
  }

  render () {

    let { goodPasswordPrinciples } = this.props;
    let { password } = this.state;

    return (
      <div class="container">
        <div class="row"
          <div class="col-md-8"
            <PasswordField password={password}
                          onPasswordChange={this.changePassword}
                          principles={goodPasswordPrinciples}/>
          </div>
          <div class="col-mid-4"
            <StrengthMetric principles={goodPasswordPrinciples}
                            password={password} />
          </div>
        </div>
      </div>
    )
  }
}
