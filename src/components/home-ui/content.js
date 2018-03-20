import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Info, Headline, InfoImg } from './ContentItems';
import { signUpClickBottom } from '../../actions/RegisterActions';
import slow from '../../img/slow.gif';
import fast from '../../img/fast.gif';

class Content extends Component {
  static propTypes = {
    signUpClickBottom: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="main-container">
        <section className="firstSection">
          <div className="loginfo">
            <h3>Demo Login</h3>
            <p>demo@demo.com</p>
            <p>demo123</p>
          </div>
          <Headline header="What's it for" tail="?" />
          <Info text="TypeQuick is a learning tool for
              new and experienced developers who are comfortable with
              writing code but want to do so faster. Code schools and
              developer programs don’t teach you syntax extensions like
              Emmet. The practical application for
              that is to ensure you’re not dependant on said extensions.
              However, when you’re ready to use those extensions, another
              issue arises; It’s all documentation, not practice. There’s no
              chance for you to commit those extensions to muscle memory and
              stop referencing cheat sheets or having tabs open to look up an
              abbreviation."
          />
        </section>
        <section className="secondSection">
          <Headline header="How it works" tail=":" />
          <Info text="TypeQuick will improve your development time by cutting out
              repetitive element typing. Lessons reveal code snippets and actions that produce
              multiple lines of code in a single line. Once you feel confident
              that you’ve got the snippets down it’s time for some time trials."
          />
          <h3>Learn to do this:</h3>
          <InfoImg image={slow} />
          <h3>Like this:</h3>
          <InfoImg image={fast} />
          <button className="btn-bottom" onClick={() => { this.props.signUpClickBottom(); }}> Start Learning! </button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clicked: state.homeReducer.clicked,
});

export default connect((mapStateToProps), { signUpClickBottom })(Content);
