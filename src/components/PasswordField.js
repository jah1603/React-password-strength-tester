import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import classNames from 'classnames';


class PasswordField extends React.Component {

  constructor(props){
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(evt){

    let { onPasswordChange } = this.props;
    onPasswordChange(evt.target.value);

  }

  obeyedPercentage(){
    let { principles, password } = this.props;

    let obeyedCount = principles.map( p => p.predicate(password))
                                .reduce((count, obeyed) =>
                                  count + (obeyed ? 1 : 0),
                                0 );

    let principlesCount = principles.length;

    return (obeyedCount / principlesCount ) * 100.0;
  }

  progressColor(){
    let percentage = this.obeyedPercentage();

    return classNames({
      error: ( percentage < 33.4 ),
      success: ( percentage >= 66.7 ),
      warning: ( percentage >= 33.4 && percentage < 66.7 )
    })
  }

  render() {

    let {password} = this.props;

    return (
      <Form type='password'
      label='Password'
      value={password}
      bsStyle={this.progressColor()}
      onChange={this.handlePasswordChange}
      hasFeedback />
    )
  }
}

export default PasswordField;
