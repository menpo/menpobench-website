export const TYPE = {
    SET_SELECTED_METHODS: "",
    SET_METHOD_METADATA: "",
    SET_AVAILABLE_METHODS: "",
    SET_ERRORS_FOR_METHOD: ""
}

// enforce that the strings exactly map to their variable name.
Object.keys(TYPE).map(constant => TYPE[constant] = constant)
