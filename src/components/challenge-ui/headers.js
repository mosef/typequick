import React, { Component } from 'react';
import { connect } from 'react-redux';

export const headerList = [];

class Header extends Component {
  render() {
    return (
      <div>
        <div question={this.props.questionArray.map(item =>
          headerList.push(item.question.header),
        )}
        >
          <h1>{headerList[0]}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionArray: state.timerReducer.questions,
});


export default connect(mapStateToProps)(Header);
