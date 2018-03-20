import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Lessons from '../lesson-ui/Lessons';
import Navbar from '../dash-ui/navbar';

describe('<lessonPage />', () => {
  it('should render the navbar', () => {
    shallow(<Navbar />);
  });
  it('should render the Challenge component', () => {
    shallow(<Provider store={store}><Lessons /></Provider>);
  });
});
