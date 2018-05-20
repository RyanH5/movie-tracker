import { LoginUser, mapStateToProps, mapDispatchToProps} from './LoginUser';

describe('LoginUser', () => {
  // describe('LoginUser', () => {
  // // snapshots
  // // state changes
  // // helpers
  // });

  // describe('handleChange', () => {

  // });

  // describe('handleSubmit', () => {

  // });

  describe('mapStateToProps', () => {
    it('should map the loginSuccess status to props', () => {
      const mockedState = {
        loginSuccess: false
      };
      const expected = {
        loginSuccess: true
      };
      const mappedProps = mapStateToProps(mockedState);
  
      expected(mappedProps).toEqual(expected);
    });
  });
});

// import { AddTodoFrom, mapStateToProps, mapDispatchToProps } from './AddTodoForm';

// describe('AddTodoFormContainer', () => {
//   describe('component', () => {
//     // snapshots
//     // state changes
//     // helpers
//   });

