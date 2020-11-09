const tricepsReducerDefaultState = [];

const tricepsReducer = (state = tricepsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TRICEPS_EXERCISE':
            return [
                ...state,
                action.triceps
            ]
        default:
            return state
    }
}

export default tricepsReducer