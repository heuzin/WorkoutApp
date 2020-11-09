const legsReducerDefaultState = [];

const legsReducer = (state = legsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LEGS_EXERCISE':
            return [
                ...state,
                action.legs
            ]
        default:
            return state
    }
}

export default legsReducer;