import React from 'react';
import { shallow } from 'enzyme';
import timeRenderer from './timeRenderer';

describe('Component: timeRenderer', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<timeRenderer />); });

  it('Renders without crashing', () => {
    shallow(<timeRenderer />);
  });
});
