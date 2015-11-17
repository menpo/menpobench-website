export const TYPE = {
    SET_SELECTED_METHODS: "",
    SET_METHOD_METADATA: "",
    SET_AVAILABLE_METHODS: "",
    SET_ERRORS_FOR_METHOD: "",
    SET_AVAILABLE_DATASETS: "",
    SET_DATASET_METADATA: "",
    SET_SELECTED_DATASET: ""
}

// enforce that the strings exactly map to their variable name.
Object.keys(TYPE).map(constant => TYPE[constant] = constant)
