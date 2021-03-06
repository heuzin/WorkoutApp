const chestReducerDefaultState = [];

const chestReducer = (state = chestReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CHEST_EXERCISE':
            return [
                ...state,
                action.chest
            ]
        case 'EDIT_CHEST_EXERCISE':
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
        case 'SET_CHEST_EXERCISES':
            return action.chest
        default:
            return state
    }
}

export default chestReducer;