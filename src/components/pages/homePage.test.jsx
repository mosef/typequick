import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './homePage';

describe('Component: HomePage', () => {
  it('Renders without crashing', () => {
    shallow(<HomePage />);
  });
});
