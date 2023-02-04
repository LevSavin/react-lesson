export const registerStart = () => ({
  type: "LOADING_REGISTER",
})

export const registerError = (error) => ({
  type: "ERROR_REGISTER",
  payload: error.toString(),
})

export const registerSuccess = (user) => ({
  type: "SUCCESS_REGISTER",
  payload: user,
})

export const loginStart = () => ({
  type: "LOADING_LOGIN",
})

export const loginError = (error) => ({
  type: "ERROR_LOGIN",
  payload: error.toString(),
})

export const loginSuccess = (user) => ({
  type: "SUCCESS_LOGIN",
  payload: user,
})

export const logautStart = () => ({
  type: "LOADING_LOGOUT",
})

export const logautError = (error) => ({
  type: "ERROR_LOGOUT",
  payload: error.toString(),
})

export const logautSuccess = (user) => ({
  type: "SUCCESS_LOGOUT",
})