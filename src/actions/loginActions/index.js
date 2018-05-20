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
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(
          {
            password,
            email
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(fetchIsLoading(false));
      const userData = await response.json();
      const user = userData.data;
      dispatch(userFetchSuccess(user));
    } catch (e) {
      dispatch(fetchErrored(true));
    }
  };
};
