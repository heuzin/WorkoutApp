const bicepsReducerDefaultState = [];

const bicepsReducer = (state = bicepsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BICEPS_EXERCISE':
            return [
                ...state,
                action.biceps
            ]
        default:
            return state
    }
}

export default bicepsReducer