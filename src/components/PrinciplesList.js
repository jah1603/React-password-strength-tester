import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';
import classNames from 'classnames';

class PrinciplesList extends React.Component {

  principleObeyed(principle){
    let { password } = this.props;

    return principle.predicate(password);
  }

  principleClass(principle){
    let obeyed = this.principleObeyed(principle);

    return classNames({

      ['text-success']: obeyed,
      ['text-danger']: !obeyed

    })
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

export default PrinciplesList;
