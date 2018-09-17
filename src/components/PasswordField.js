import React, {Component} from 'react';
import {Input} from 'react-bootstrap';


class PasswordField extends React.Component {

  render() {
    return (
      <Input type='password'
      label='Password'
      hasFeedback
    )
  }
}
