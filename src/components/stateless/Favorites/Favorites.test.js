import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Favorites />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});