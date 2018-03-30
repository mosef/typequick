This is the front end for the TypeQuick Project
The backend can be found here:<a href="https://github.com/mosef/typequick-api">TypeQuick Backend</a>

<h1>TypeQuick</h1>
<p><a href="typequick.netlify.com">TypeQuick</a> is a responsive full-stack app made to teach developers to code faster</p>

## Getting started
### Installing
```
>   git clone 
>   cd 
>   npm install
```
### Launching
```
>   npm start
```
Then open [`localhost:8000`](http://localhost:8000) in a browser.
```
>   Demo Log In:
email: demo@demo.com
password: demo123
```

<h2>Introduction</h2>
<p>
  TypeQuick is a learning tool for
  new and experienced developers who are comfortable with
  writing code but want to do so faster. Code schools and
  developer programs don’t teach you syntax extensions like
  Emmet. The practical application for
  that is to ensure you’re not dependant on said extensions.
  However, when you’re ready to use those extensions, another
  issue arises; It’s all documentation, not practice. There’s no
  chance for you to commit those extensions to muscle memory and
  stop referencing cheat sheets or having tabs open to look up an
  abbreviation.
</p>

<h2>Wireframes & Mockups</h2>
<a href="https://www.figma.com/file/fWvY1Odkg6Ckb2jjJYLoG0LV/TypeQuick?node-id=260%3A6">Design Board</a>
<p>This project and it's art work were designed in Figma.</p>

<h2>Technology</h2>
<h3>Front End</h3>
<ul>
  <li>React</li>
  <li>Redux</li>
  <li>JavaScript</li>
  <li>CSS Grid and written in SCSS (compiled in CodeKit)</li>
</ul>
<h3>Back End</h3>
<ul>
  <li>Node.js + Express.js (web server)</li>
  <li>MongoDB (database)</li>
  <li><a href="https://mochajs.org/">Mocha</a> + <a href="http://chaijs.com/">Chai</a> (testing)</li>
  <li>Continuous integration and deployment with <a href="https://travis-ci.org/">Travis CI</a></li>
</ul>
<h3>Responsive</h3>
<ul>
  <li>The app is fully responsive and quickly adapts to all mobile, tablet, and desktop viewports.</li>
</ul>
<h3>Security</h3>
<ul>
  <li>User passwords are encrypted using <a href="https://github.com/dcodeIO/bcrypt.js">bcrypt.js</a>.</li>
  <li><a href="http://passportjs.org/">Passport</a> is used to control endpoints from unauthorized users.</li>
</ul>