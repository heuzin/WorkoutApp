import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase'

// ADD CHEST
const addChestExercise = (chest) => ({
    type: 'ADD_CHEST_EXERCISE',
    chest
})

export const startAddChestExercise = (chestData = {}) => {
    return (dispatch) => {
        const {
            name = '', 
            series = 0,  
            reps = 0, 
            note = '',
            member = 'Chest'
        } = chestData
        const chest = { name, series, reps, note, member }

        database.ref('chest').push(chest).then((ref) => {
            dispatch(addChestExercise({
                id: ref.key,
                ...chest
            }))
        })
    }
}

// ADD BICEPTS
const addBicepsExercise = (biceps = {}) => ({
    type: 'ADD_BICEPS_EXERCISE',
    biceps
})

export const startAddBicepsExercise = (bicepsData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            series = 0,
            reps = 0,
            note = '',
            member = 'Biceps'
        } = bicepsData
        const biceps = { name, series, reps, note, member }

        database.ref('biceps').push(biceps).then((ref) => {
            dispatch(addBicepsExercise({
                id: ref.key,
                ...biceps
            }))
        })
    }
}

// ADD TRICEPS
const addTricepsExercise = (triceps = {}) => ({
    type: 'ADD_TRICEPS_EXERCISE',
    triceps
})

export const startAddTricepsExercise = (tricepsData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            series = 0,
            reps = 0,
            note = '',
            member = 'Triceps'
        } = tricepsData
        const triceps = { name, series, reps, note, member }

        database.ref('triceps').push(triceps).then((ref) => {
            dispatch(addTricepsExercise({
                id: ref.key,
                ...triceps
            }))
        })
    }
}

// ADD SHOULDER
const addShoulderExercise = (shoulders = {}) => ({
    type: 'ADD_SHOULDER_EXERCISE',
    shoulders
})

export const startAddShouldersExercise = (shouldersData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            series = 0,
            reps = 0,
            note = '',
            member = 'Shoulder'
        } = shouldersData
        const shoulders = { name, series, reps, note, member }

        database.ref('shoulders').push(shoulders).then((ref) => {
            dispatch(addShoulderExercise({
                id: ref.key,
                ...shoulders
            }))
        })
    }
}

// ADD LEGS
const addLegsExercise = (legs = {}) => ({
    type: 'ADD_LEGS_EXERCISE',
    legs
})

export const startAddLegsExercise = (legsData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            series = 0,
            reps = 0,
            note = '',
            member = 'Legs'
        } = legsData
        const legs = { name, series, reps, note, member }

        database.ref('legs').push(legs).then((ref) => {
            dispatch(addLegsExercise({
                id: ref.key,
                ...legs
            }))
        })
    }
}

const addBackExercise = (back ={}) => ({
    type: 'ADD_BACK_EXERCISE',
    back
})

export const startAddBackExercise = (backData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            series = 0,
            reps = 0,
            note = '',
            member = 'back'
        } = backData
        const back = { name, series, reps, note, member}

        database.ref('back').push(back).then((ref) => {
            dispatch(addBackExercise({
                id: ref.key,
                ...back
            }))
        })
    }
}

// REMOVE EXERCISE
const removeExercise = ({ id } = {}) => ({
    type: 'REMOVE_EXERCISE',
    id
})

export const startRemoveChestExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`chest/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveBicepsExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`biceps/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveTricepsExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`triceps/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveShouldersExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`shoulders/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveLegsExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`legs/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveBackExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`back/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

// EDIT EXERCISE
const editExercise = (id, updates) => ({
    type: 'EDIT_EXERCISE',
    id,
    updates
})

export { addChestExercise, addBicepsExercise, addTricepsExercise, addShoulderExercise, addLegsExercise, addBackExercise, removeExercise, editExercise }