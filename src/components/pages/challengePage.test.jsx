import React from 'react';
import { shallow, mount } from 'enzyme';
import challengePage from './challengePage';
import Challenge from '../challenge-ui/challenge';
import Navbar from '../dash-ui/navbar';

describe('<challengePage />', () => {
  it('Renders without crashing', () => {
    shallow(<challengePage />);
  });
  it('should render the navbar', () => {
    shallow(<Navbar />);
  });
  it('should render the Challenge component', () => {
    shallow(<Challenge />);
  });
});
