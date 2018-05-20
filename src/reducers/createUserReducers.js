export const newUserId = (state = -1, action) => {
  switch (action.type) {
    case 'CREATE_USER_SUCCESS':
      return action.id;
    default:
      return state;
  }
};

export const invalidForm = (state = false, action) => {
  switch (action.type) {
    case 'INCOMPLETE_ENTRIES':
      return action.fieldsIncomplete;
    default:
      return state;
  }
}

export const createAccountFailed = (state = false, action) => {
  switch (action.type) {
    case 'EMAIL_NOT_AVAILABLE':
      return action.emailBeingUsed;
    default:
      return state;
  }
}
