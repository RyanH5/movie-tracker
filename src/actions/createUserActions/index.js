import { userFetchSuccess } from '../loginActions/index';

export const userCreateSuccess = (id) => ({
  type: 'CREATE_USER_SUCCESS',
  id
});

export const requiredIncomplete = (bool) => ({
  type: 'INCOMPLETE_ENTRIES',
  fieldsIncomplete: bool
});

export const fetchIsLoading = (bool) => ({
  type: 'FETCH_IS_LOADING',
  bool
});

export const creationDenied = (bool) => ({
  type: 'EMAIL_NOT_AVAILABLE',
  emailBeingUsed: bool
});

export const createNewUser = (url, name, email, password) => {
  return async (dispatch) => {
    dispatch(fetchIsLoading(true));
    dispatch(requiredIncomplete(false));
    dispatch(creationDenied(false));
    if (!name || !email || !password) {
      return dispatch(requiredIncomplete(true));
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(
          {
            name,
            email,
            password
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const userCreated = await response.json();
      dispatch(userCreateSuccess(userCreated.id));
      dispatch(userFetchSuccess(userCreated.id));
      dispatch(fetchIsLoading(false));
    } catch (error) {
      dispatch(creationDenied(true));
      dispatch(fetchIsLoading(false));
    }
  };
};
