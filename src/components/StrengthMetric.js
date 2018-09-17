import React, { Component } from 'react'
import { Panel, ProgressBar } from 'react-bootstrap';
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

  render() {
    return (
      <Panel>
      <ProgressBar now={this.obeyedPercentage()}/>
      <h5>A good password should: </h5>
      <PrinciplesList {...this.props} />
      </Panel>
    )
  }
}
