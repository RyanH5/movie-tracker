export const userCreationSuccess = (state = null, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCESS':
      return action.id;
    default:
      return state;;
  }
};
