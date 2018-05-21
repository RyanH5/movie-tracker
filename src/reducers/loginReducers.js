export const loginSuccess = (state = {}, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCESS':
      return {userId: action.userId};
    default:
      return state;
  }
};

export const loginErrored = (state = false, action) => {
  switch (action.type) {
    case  'FETCH_ERRORED':
      return action.isErrored;
    default:
      return state;
  }
};

export const loginLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};
