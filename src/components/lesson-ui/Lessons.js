import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLessons, clearState } from '../../actions/LessonActions';
import EmmetLogo from '../../img/emmet-logo.png';
import Images from './lessonImages';

const pImg = Images();

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
          content: PropTypes.shape({
            paragraph: PropTypes.arrayOf(PropTypes.string),
          }),
        }),
        difficulty: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
    content: PropTypes.arrayOf(PropTypes.string),
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
    content: ['content unavailable'],
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
            <div className="top">
              <img src={EmmetLogo} alt="" className="e-logo" />
              <h1>Emmet</h1>
              <button
                onClick={() => {
            this.props.getLessons();
            }}
                className="learn-button"
              > Learn Emmet
              </button>
            </div>
            <div className="overview">
              <h3>Lesson Overiew:</h3>
              <p>In this lesson you will learn the basics of emmet.</p>
            </div>

          </div>)}
        {this.props.lessonRecieved ?
        (
          <div className="lesson-card">
            <div className="content">
              <h1>{this.props.lesson.chapter.page.title}</h1>
              <p>{this.props.content[0]}</p>
              <img src={pImg[0]} alt="nesting example" />
              <p>{this.props.content[1]}</p>
              <img src={pImg[1]} alt="sibling example" />
              <p>{this.props.content[2]}</p>
              <img src={pImg[2]} alt="multiplication example" />
              <p>{this.props.content[3]}</p>
              <img src={pImg[3]} alt="div example" />
              <p>{this.props.content[4]}</p>
              <img src={pImg[4]} alt="grouping example" />
              <p>Those were the basics! There are more complex actions you can
                create with Emmet but for now these are the essentials needed to
                get started. Try testing your knowledge in a challenge!
              </p>
              <Link to="/challenge"><button className="try-chall">Try Challenge</button></Link>
            </div>
          </div>) : (null)
      }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  lesson: state.lessonReducer.lesson,
  lessonRecieved: state.lessonReducer.lessonRecieved,
  content: state.lessonReducer.content,
});

export default connect((mapStateToProps), { getLessons, clearState })(Lessons);
