import React, {Component} from 'react';
import {Input} from 'react-bootstrap';


class PasswordField extends React.Component {

  constructor(props){
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(evt){

    let { onPasswordChange = this.props }
    onPasswordChange(evt.target.value);

  }

  render() {
    return (
      <Input type='password'
      label='Password'
      value={password}
      onChange={this.handlePasswordChange}
      hasFeedback
    )
  }
}
