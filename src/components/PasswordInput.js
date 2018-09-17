import React, { Component } from 'react';

class PasswordInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { password: '' };
  }

  render () {

    let { goodPasswordPrinciples } = this.props;

    return (
      <div class="container">
        <div class="row"
          <div class="col-md-8"
            <PasswordField />
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
