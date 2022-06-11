import { actionsTypes } from "../types/actionsTypes";

const INITIAL_STATE = { logged: false }

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.login:
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email,
        logged: true
      }
    case actionsTypes.logout:
      return { logged: false }
    default:
      return state
  }

}

export default authReducer