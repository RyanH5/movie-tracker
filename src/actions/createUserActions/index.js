export const userCreateSuccess = (id) => {
  type: 'CREATE_USER_SUCCESS',
  id
}

export const createNewUser = (name, email, password) => {
  return async (dispatch) => {
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
      const userCreated = response .json()
      dispatch(userCreateSuccess(userCreated))
    } catch (e) {
      // handle error
    }
  }
}
