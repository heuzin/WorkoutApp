const chestReducerDefaultState = [];

const chestReducer = (state = chestReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CHEST_EXERCISE':
            return [
                ...state,
                action.chest
            ]
        default:
            return state
    }
}

export default chestReducer;