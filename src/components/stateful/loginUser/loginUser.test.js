import React from 'react';
import { LoginUser, mapStateToProps, mapDispatchToProps, handleChange } from './LoginUser';
import { shallow, mount } from 'enzyme';
import { fetchDatabase } from '../../../actions/loginActions';

describe('LoginUser', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginUser />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct default state', () => {
    const expected = {
      password: '',
      email: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('should have an initial state', () => {
    expect(wrapper.state().password).toBe('');
    expect(wrapper.state().email).toEqual('');
  });

  describe('handleSubmit', () => {
    let mockUrl;
    let mockData;
    let mockEmail;
    let mockPassword;

    beforeEach(() => {
      mockUrl = 'mockurl.com';
      mockEmail= 'ok@mgmail.com';
      mockPassword = '12345';
      mockData = {
        results:
          [{status:"success", data:[{id:1, name:"Taylor", password:"password", email:"tman2272@aol.com"}]
          }]
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockData)
        });
      });
    });

    it('should call fetch with the correct params', () => {
      const mockFetch = jest.fn()
      fetchDatabase(mockUrl, mockEmail, mockPassword);
      expect(mockFetch).toHaveBeenCalledWith(mockUrl, mockEmail, mockPassword);
    });
  });
});
