import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';
import classNames from 'classnames';

class StrengthMetric extends React.Component {

  obeyedPercentage(){
    let { principles, password } = this.props;

    let obeyedCount = principles.map( p => p.predicate(password))
                                .reduce((count, obeyed) =>
                                  count + (satisfied ? 1 : 0),
                                0 );

    let principlesCount = principles.length;

    return (obeyedCount / principlesCount ) * 100.0;
  }

  principleObeyed(principle){
    let { password } = this.props;

    return principle.predicate(password);
  }

  principleClass(principle){
    let obeyed = this.principleObeyed(principle);

    return classNames({

      ['text-success': obeyed],
      ['text-danger': !obeyed]

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
