import React from 'react';
import Signup from '../forms/signup';
import Navbar from '../navbar';
import '../../css/homepage.css';

const HomePage = () => (
  <div>
    <Navbar />
    <header>
      <h1>TypeQuick_</h1>
      <h2>A learning tool to code faster</h2>
      <Signup />
    </header>
    <main>
      <div className="wrapper">
        <div className="single-column">
          <section>
            <h1> Whats it for ?</h1>
            <p>TypeQuick is a learning tool for
              new and experienced developers who are comfortable with
              writing code but want to do so faster. Code schools and
              developer programs don’t teach you syntax extensions like
              Emmet or Es7. The practical application for
              that is to ensure you’re not dependant on said extensions.
              However, when you’re ready to use those extensions, another
              issue arises; It’s all documentation, not practice. There’s no
              chance for you to commit those extensions to muscle memory and
              stop referencing cheat sheets or having tabs open to look up an
              bbreviation.
            </p>
            <div className="placeholder" />
            <div className="placeholder" />
          </section>
          <section>
            <h1> How does it work?</h1>
            <p>TypeQuick will improve your development time by cutting out
              repetitive element typing. Pick a library you’d like to practice
              with and begin lessons that range from basic to expert. In each
              lesson small sections reveal code snippets and actions that produce
              multiple lines of code in a single line. Once you feel confident
              that you’ve got the snippets down it’s time for some time trials.
            </p>
            <div className="placeholder" />
            <div className="placeholder" />
            <div className="placeholder" />
          </section>
          <button className="btn-bottom"> Start Learning! </button>
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
