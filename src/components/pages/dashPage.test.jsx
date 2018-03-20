import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Chart from '../dash-ui/Chart';
import Navbar from '../dash-ui/navbar';

describe('<dashPage />', () => {
  it('should render the navbar', () => {
    shallow(<Navbar />);
  });
  it('should render the Challenge component', () => {
    shallow(<Provider store={store}><Chart /></Provider>);
  });
});
