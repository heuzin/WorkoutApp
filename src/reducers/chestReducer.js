const chestReducerDefaultState = [];

const chestReducer = (state = chestReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CHEST_EXERCISE':
            return [
                ...state,
                action.chest
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

export default chestReducer;