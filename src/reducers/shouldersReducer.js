const shouldersReducerDefaultState = []

const shouldersReducer = (state = shouldersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SHOULDER_EXERCISE':
            return [
                ...state,
                action.shoulders
            ]
        case 'EDIT_EXERCISE':
            return state.map((exercise) => {
                if (exercise.id === action.id) {
                    return {
                        ...exercise,
                        ...action.updates
                    }
                } else {
                    return exercise
                }
            })
        case 'REMOVE_EXERCISE':
            return state.filter(({ id }) => {
                return action.id !== id
            })
        default:
            return state
    }    
}

export default shouldersReducer;