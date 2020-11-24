const backReducerDefaultState = []

const backReducer = (state = backReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BACK_EXERCISE':
            return [
                ...state,
                action.back
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
        case 'SET_BACK_EXERCISES':
            return action.back
        default:
            return state
    }
}

export default backReducer;