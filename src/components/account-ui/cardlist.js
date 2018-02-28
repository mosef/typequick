import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLessons } from '../../actions/grablesson';

class CardList extends Component {
  componentWillMount() {
    this.props.requestedLesson.push({ title: 'Learn Emmet' });
  }
  render() {
    return (
      <div>
        {this.props.lessonRecieved ?
        (null) :
        (
          <div className="card">
            <button onClick={() => {
            this.props.getLessons(this.props.requestedLesson);
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
  requestedLesson: state.lessonReducer.requestedLesson,
  lessonRecieved: state.lessonReducer.lessonRecieved,
});

export default connect((mapStateToProps), { getLessons })(CardList);
