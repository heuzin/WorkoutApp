const exerciseReducerDefaultState = []

const exerciseReducer = (state = exerciseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BICEPS_EXERCISE':
            return [
                ...state,
                action.exercise
            ]
        case 'ADD_TRICEPS_EXERCISE':
            return [
                ...state,
                action.exercise
            ]
        case 'ADD_SHOULDER_EXERCISE':
            return [
                ...state,
                action.exercise
            ]
        case 'ADD_LEGS_EXERCISE':
            return [
                ...state,
                action.exercise
            ]
        case 'REMOVE_EXERCISE':
            return state.filter(({ id }) => {
                return action.id !== id
            })
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

export default exerciseReducer