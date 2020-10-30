const exerciseReducerDefaultState = []

const exerciseReducer = (state = exerciseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CHEST_EXERCISE':
            return [
                ...state,
                action.exercise
            ]
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
        default:
            return state
    }
}

export default exerciseReducer