import React from 'react';
import { shallow, mount} from 'enzyme';
import { CreateUser } from './CreateUser';
import * as actions from '../../../actions/createUserActions/index';
import { Provider } from 'react-redux';

describe('CreateUser', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<CreateUser />);
  
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().password).toBe('');
    expect(wrapper.state().email).toEqual('');
  });
});

