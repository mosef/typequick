import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow, mount } from 'enzyme';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});
