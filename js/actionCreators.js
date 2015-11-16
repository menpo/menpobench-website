import store from './store'
import { TYPE } from './constants'

export function setSelectedMethods(methods) {
    return {
        type: TYPE.SET_SELECTED_METHODS,
        methods: methods
    }
}
