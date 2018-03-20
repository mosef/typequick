import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './loginPage';

describe('Component: LoginPage', () => {
  it('Renders without crashing', () => {
    shallow(<LoginPage />);
  });
});
