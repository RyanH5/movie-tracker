export const fetchIsLoading = (bool) => ({
  type: 'FETCH_LOADING',
  isLoading: bool
});

export const fetchErrored = (bool) => ({
  type: 'FETCH_ERRORED',
  isErrored: bool
});

export const userFetchSuccess = (user) => ({
  type: 'USER_FETCH_SUCCESS',
  user
});

export const fetchDatabase = (url, email, password) => {
  return async (dispatch) => {
    try {
      dispatch(fetchIsLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(fetchIsLoading(false));
      const userData = await response.json();
      const user = findUser(userData, email, password);
      dispatch(userFetchSuccess(user));
    } catch (e) {
      dispatch(fetchErrored(true));
    }
  };
};

export const findUser = (userData, email, password) => {
  return userData.data.find(user => user.email === email && user.password === password);
};