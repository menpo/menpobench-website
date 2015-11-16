export const TYPE = {
    SET_ACTIVE_EXPERIMENTS: ""
}

// enforce that the strings exactly map to their variable name.
Object.keys(TYPE).map(constant => TYPE[constant] = constant)
