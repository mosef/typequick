import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Content from './content';

describe('Component: Content', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}><Content /></Provider>);
  });
});
