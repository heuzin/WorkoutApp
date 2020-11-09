const shouldersReducerDefaultState = []

const shouldersReducer = (state = shouldersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SHOULDER_EXERCISE':
            return [
                ...state,
                action.shoulders
            ]
        default:
            return state
    }    
}

export default shouldersReducer;