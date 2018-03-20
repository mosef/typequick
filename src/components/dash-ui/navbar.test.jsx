import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Navbar from './navbar';

describe('Component: Navbar', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Navbar />); });

  it('Renders without crashing', () => {
    shallow(<Navbar />);
  });
  it('Renders the dash nav wrapper', () => {
    expect(wrapper.hasClass('dash-nav')).to.equal(true);
  });
  it('Renders the menu grid and its children', () => {
    const menu = wrapper.find('.menu-grid');
    expect(menu.children()).to.have.length(4);
  });
});
