import { createStore } from 'redux'
import rootReducer from './reducers'
// TODO remove this initialization
import * as ac from  './actionCreators'
import * as data from './data'
const store = createStore(rootReducer)
export default store


// all below just tmp for debugging
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

const predefinedDatasetMetadata = {
    'lfpw': {
        'label': 'LFPW'
    }
}

store.dispatch(ac.setAvailableMethods(['sdm', 'aam']))
store.dispatch(ac.setAvailableDatasets(['lfpw']))

store.dispatch(ac.setMethodMetadata(predefinedMethodMetadata))
store.dispatch(ac.setDatasetMetadata(predefinedDatasetMetadata))

store.dispatch(ac.setErrorsForMethod('sdm', data.sdm.face_size))
store.dispatch(ac.setErrorsForMethod('aam', data.aam.face_size))
