import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
export default store

// just tmp for debugging
window.states = []
store.subscribe(() => window.states.push(store.getState()))
