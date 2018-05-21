export const fetchIsLoading = (bool) => ({
  type: 'FETCH_LOADING',
  isLoading: bool
});

export const fetchErrored = (bool) => ({
  type: 'FETCH_ERRORED',
  isErrored: bool
});

export const userFetchSuccess = (userId) => ({
  type: 'USER_FETCH_SUCCESS',
  userId
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
      debugger;      
      dispatch(fetchIsLoading(false));
      const userData = await response.json();
      const user = userData.data;
      dispatch(userFetchSuccess(user.id));
    } catch (error) {
      dispatch(fetchErrored(true));
      dispatch(fetchIsLoading(false)); 
    }
  };
};
// dispatch(setErrorMessage(error.message))   
// rename fetchErrored (make useful)
// dispatch error if response.ok false
// click fav prelogin, route to login/createUSR
// don't display logout preLogin
