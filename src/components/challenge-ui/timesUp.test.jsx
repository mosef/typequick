import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import TimesUp from './timesUp';

describe('Component: timesUp', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Provider store={store}><TimesUp /></Provider>); });

  it('Renders without crashing', () => {
    shallow(<Provider store={store}><TimesUp /></Provider>);
  });
});
