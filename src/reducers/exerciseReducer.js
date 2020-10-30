const exerciseReducerDefaultState = []

const exerciseReducer = (state = exerciseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            return [
                ...state,
                action.exercise
            ]
        default:
            return state
    }
}

export default exerciseReducer