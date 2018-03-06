import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLessons, clearState } from '../../actions/LessonActions';

class Lessons extends Component {
  componentWillUnmount() {
    this.props.clearState();
  }
  render() {
    return (
      <div>
        {this.props.lessonRecieved ?
        (null) :
        (
          <div className="card">
            <button onClick={() => {
            this.props.getLessons();
            }}
            > Learn Emmet
            </button>
          </div>)}
        {this.props.lessonRecieved ?
        (
          <div className="lesson-card">
            <h1>{this.props.lesson.chapter.page.title}</h1>
            <p>{this.props.lesson.chapter.page.content}</p>
          </div>) : (null)
      }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  lesson: state.lessonReducer.lesson,
  lessonRecieved: state.lessonReducer.lessonRecieved,
});

export default connect((mapStateToProps), { getLessons, clearState })(Lessons);
