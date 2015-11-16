import { combineReducers } from 'redux'
import { TYPE } from './constants'

const defaultMethods = [
    { value: 'sdm', label: 'SDM (Menpo)' },
    { value: 'aam', label: 'AAM (Menpo)' }
]

function reduceAvailableMethods(methods=defaultMethods, action) {
    return [...methods]
}

function reduceSelectedMethods(methods=[], action) {
    if (action.type == TYPE.SET_SELECTED_METHODS) {
        return [...action.methods]
    } else {
        return [...methods]
    }
}

const rootReducer = combineReducers({
    availableMethods: reduceAvailableMethods,
    selectedMethods: reduceSelectedMethods
})

export default rootReducer
