import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLessons, clearState } from '../../actions/LessonActions';

class Lessons extends Component {
  static propTypes = {
    getLessons: PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired,
    lessonRecieved: PropTypes.bool,
    lesson: PropTypes.shape({
      _id: PropTypes.string,
      lessonTitle: PropTypes.string,
      chapter: PropTypes.shape({
        page: PropTypes.shape({
          title: PropTypes.string,
          content: PropTypes.string,
        }),
        difficulty: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }
  static defaultProps = {
    lessonRecieved: false,
    lesson: {
      _id: '0',
      lessonTitle: 'Unavailable',
      chapter: {
        page: {
          title: 'unavailable',
          content: 'unavailable',
        },
        difficulty: ['basic'],
      },
    },
  }
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
            <div className="palceHolder" />
            <div className="overview">
              <p>Lesson Overiew:</p>
            </div>
            <button
              onClick={() => {
            this.props.getLessons();
            }}
              className="learn-button"
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
