const backReducerDefaultState = []

const backReducer = (state = backReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BACK_EXERCISE':
            return [
                ...state,
                action.back
            ]
        default:
            return state
    }
}

export default backReducer;