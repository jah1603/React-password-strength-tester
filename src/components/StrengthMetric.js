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

  progressColor(){
    let percentage = this.obeyedPercentage();

    return classNames({
      danger: ( percetage < 33.4 ),
      success: ( percentage >= 66.7 ),
      warning: ( percentage >= 33.4 && percentage < 66.7 )
    })
  }

  render() {
    return (
      <Panel>
      <ProgressBar now={this.obeyedPercentage()}
                    bsStyle={this.progressColor()}/>
      <h5>Signs of a strong password: </h5>
      <PrinciplesList {...this.props} />
      </Panel>
    )
  }
}
