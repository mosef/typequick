import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { timeExpired, complete } from '../../actions/ChallengeActions';

class TimesUp extends Component {
  static propTypes = {
    timeExpired: PropTypes.func.isRequired,
    complete: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.timeExpired();
  }
  render() {
    return (
      <div>
        <div className="timeExp">
          <h1>Times Up!</h1>
          <button onClick={() => this.props.complete()}>Try again</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { timeExpired, complete })(TimesUp);
