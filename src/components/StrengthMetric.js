import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';
import 

class StrengthMetric extends React.Component {

  principleObeyed(principle){
    let { password } = this.props;

    return principle.predicate(password);
  }

  render() {
    let { principles } = this.props

    return (
      <Panel>
      <ul>
      { principles.map(principle =>
      <li>
        <small>
          { principle.label }
        </small>
      </li>
        )}
      </ul>
      </Panel>
    )
  }
}
