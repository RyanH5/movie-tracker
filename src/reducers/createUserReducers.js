export const newUserId = (state = -1, action) => {
  switch (action.type) {
    case 'CREATE_USER_SUCCESS':
      return action.id;
    default:
      return state;
  }
};

export const creationFailed = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_USER_ERRORED':
      return action.creationFailed;
    default:
      return state;
  }
}
