import React from 'react';
import { shallow } from 'enzyme';
import Timer from './timer';

describe('Component: timer', () => {
  const minProps = {
    date: Date.now(),
  };
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Timer {...minProps} />); });

  it('Renders without crashing', () => {
    shallow(<Timer {...minProps} />);
  });
});
