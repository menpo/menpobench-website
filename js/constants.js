export const TYPE = {
    SET_AVAILABLE_METHODS: "",
    SET_AVAILABLE_DATASETS: "",
    SET_AVAILABLE_ERROR_METRICS: "",

    SET_SELECTED_METHODS: "",
    SET_SELECTED_DATASET: "",
    SET_SELECTED_ERROR_METRIC: "",

    SET_ERRORS_FOR_METHOD: "",

    SET_METHOD_METADATA: "",
    SET_DATASET_METADATA: "",
    SET_ERROR_METRIC_METADATA: ""
}

// enforce that the strings exactly map to their variable name.
Object.keys(TYPE).map(constant => TYPE[constant] = constant)
