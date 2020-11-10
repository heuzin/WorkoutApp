const tricepsReducerDefaultState = [];

const tricepsReducer = (state = tricepsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TRICEPS_EXERCISE':
            return [
                ...state,
                action.triceps
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

export default tricepsReducer