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
        default:
            return state
    }
}

export default backReducer;