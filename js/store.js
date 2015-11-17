import { createStore } from 'redux'
import rootReducer from './reducers'
// TODO remove this initialization
import * as ac from  './actionCreators'

const store = createStore(rootReducer)
export default store

// just tmp for debugging
window.states = []
store.subscribe(() => window.states.push(store.getState()))



const predefinedMethodMetadata = {
    'sdm': {
        'label': 'SDM (Menpo)'
    },
    'aam': {
        label: 'AAM (Menpo)'
    }
}


store.dispatch(ac.setMethodMetadata(predefinedMethodMetadata))