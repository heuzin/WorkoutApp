const legsReducerDefaultState = [];

const legsReducer = (state = legsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LEGS_EXERCISE':
            return [
                ...state,
                action.legs
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

export default legsReducer;