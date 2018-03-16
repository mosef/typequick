import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bubble } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { getChartData, clearState } from '../../actions/ChartActions';

function chartLib(item) {
  const chartData = {
    labels: ['Time Taken'],
    datasets: [
      {
        label: 'Time Taken',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: item,
      },
    ],
  };
  return chartData;
}

class Chart extends Component {
  static propTypes = {
    scores: PropTypes.shape({
      score: PropTypes.arrayOf(PropTypes.object),
    }),
    getChartData: PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired,
  }
  static defaultProps = {
    scores: [{ x: 0, y: 0, r: 5 }],
  }

  componentDidMount() {
    this.props.getChartData();
  }
  componentWillUnmount() {
    this.props.clearState();
  }
  render() {
    return (
      <div className="chart">
      CHART COMPONENT
        <Bubble
          data={chartLib(this.props.scores)}
          width={50}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
        <div className="legend">
          <p>The numbers in order when pointing at a bubble:</p>
          <p>Attempt Number, time taken, bubble radius</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.userReducer.scores,
});

export default connect((mapStateToProps), { getChartData, clearState })(Chart);
