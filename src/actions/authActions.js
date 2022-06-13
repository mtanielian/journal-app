import { actionsTypes } from "../types/actionsTypes";
import { auth, googleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from '../firebase/firebaseConfig';

export const doLogin = ({ uid, displayName, email }) => ({
  type: actionsTypes.login,
  payload: { uid, displayName, email}
})


export const doLogout = () => ({
  type: actionsTypes.logout
})


export const loginGoogle = () => async (dispatch) => {
    const { user } = await signInWithPopup(auth, googleAuthProvider)
    const { uid, displayName, email } = user
    dispatch(doLogin({ uid, displayName, email }))   
}


export const registerUser = ({ displayName, email, password }) => async (dispatch) => {
  console.log({ displayName, email, password })
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, { displayName })
    dispatch(doLogin({ uid: user.uid, displayName, email }))

  } catch (error) {
    console.log('Register Error____________', error)
    throw new Error('El usuario ya se encuentra registrado')
    // TODO: Mandar con toast un mensaje
  }
}


export const logout = () => async (dispatch) => {
  try {
    await auth.signOut()
    dispatch(doLogout())

  } catch (error) {
    console.log('Logout Error')
  }
}