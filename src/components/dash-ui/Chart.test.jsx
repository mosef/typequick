import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Chart from './Chart';

describe('Component: Chart', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Provider store={store}><Chart /></Provider>); });

  it('Renders without crashing', () => {
    shallow(<Provider store={store}><Chart /></Provider>);
  });
});
