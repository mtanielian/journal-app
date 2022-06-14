import { getDocs, limit, orderBy, query, where, deleteDoc, doc } from 'firebase/firestore';
import { db, collection, addDoc, Timestamp } from '../firebase/firebaseConfig';
import { actionsTypes } from '../types/actionsTypes';

const collectionName = 'events'

const doAdd = (event) => ({
  type: actionsTypes.addEvent,
  payload: event
})

const doLoading = (loading) => ({
  type: actionsTypes.loadingEvent,
  payload: loading
})

const doLoadEvents = (events) => ({
  type: actionsTypes.loadEvents,
  payload: events
})

const doDelete = (id) => ({
  type: actionsTypes.deleteEvent,
  payload: id
})

export const save = (form) => async (dispatch, getState) => {
  dispatch(doLoading(true))
  const { uid } = getState().auth
  const rs = await addDoc(collection(db, collectionName), {
    uid,
    createOn: Timestamp.now(),
    ...form
  })
  const newEvent = {uid, id: rs.id, ...form}
  dispatch(doAdd(newEvent))
}


export const loadRecentEvents = () => async (dispatch, getState) => {
  const { uid } = getState().auth
  const q = query(collection(db, collectionName),
    where("uid", "==", uid),
    orderBy('createOn', 'desc'),
    limit(10)
  )

  const rs = await getDocs(q)
  const events = rs.docs.map( doc => ({ id: doc.id, ...doc.data() }))
  dispatch(doLoadEvents(events))
}


export const deleteEvent = (id) => async (dispatch, getState) => {
  deleteDoc(doc(db, collectionName, id))
  dispatch(doDelete(id))
}