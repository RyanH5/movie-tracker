export const userSignOut = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGN_OUT':
      return {};
    default:
      return state;
  }
};