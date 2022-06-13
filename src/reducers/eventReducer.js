import { actionsTypes } from "../types/actionsTypes"


const INITIAL_STATE = {
  events: [],
  eventDetail: {},
  loading: false,
}

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.addEvent:
      return { ...state, events:[ action.payload, ...state.events ], loading: false }
    case actionsTypes.loadingEvent:
      return { ...state, loading: action.payload }
    case actionsTypes.loadEvents:
      return { ...state, events: [ ...action.payload ] }
    default:
      return state
  }
}


export default eventReducer