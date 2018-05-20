export const userCreateSuccess = (id) => ({
  type: 'CREATE_USER_SUCCESS',
  id
})

export const userCreateErrored = (bool) => ({
  type: 'CREATE_USER_ERRORED',
  creationFailed: bool
})

export const createNewUser = (name, email, password) => {
  return async (dispatch) => {
    if(!name || !email || !password) {
      return dispatch(userCreateErrored(true))
    }
    try {
      const url = 'http://localhost:3000/api/users/new'
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
      })
      const userCreated = await response.json()
      dispatch(userCreateSuccess(userCreated.id))
    } catch (e) {
      dispatch(userCreateErrored(true))
    }
  }
}
