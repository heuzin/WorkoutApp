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

        database.ref('exercise/chest').push(chest).then((ref) => {
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

        database.ref('exercise/biceps').push(biceps).then((ref) => {
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

        database.ref('exercise/triceps').push(triceps).then((ref) => {
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

        database.ref('exercise/shoulders').push(shoulders).then((ref) => {
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

        database.ref('exercise/legs').push(legs).then((ref) => {
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

        database.ref('exercise/back').push(back).then((ref) => {
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
        return database.ref(`exercise/chest/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveBicepsExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`exercise/biceps/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveTricepsExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`exercise/triceps/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveShouldersExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`exercise/shoulders/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveLegsExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`exercise/legs/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveBackExercise = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`exercise/back/${id}`).remove().then(() => {
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

// SET_EXERCISES
const setChestExercise = (chest) => ({
    type: 'SET_CHEST_EXERCISES',
    chest
})

const setBicepsExercise = (biceps) => ({
    type: 'SET_BICEPS_EXERCISES',
    biceps
})

const setBackExercise = (back) => ({
    type: 'SET_BACK_EXERCISES',
    back
})

const setLegsExercise = (legs) => ({
    type: 'SET_LEGS_EXERCISES',
    legs
})

const setShouldersExercise = (shoulders) => ({
    type: 'SET_SHOULDERS_EXERCISES',
    shoulders
})

const setTricepsExercise = (triceps) => ({
    type: 'SET_TRICEPS_EXERCISES',
    triceps
})

export const startSetExercises = () => {
    return (dispatch) => {
        const chestFirebase = database.ref('exercise/chest')
            .once('value')
            .then((snapshot) => {
                const chest = [];
    
                snapshot.forEach((childSnapshot) => {
                    chest.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                
                dispatch(setChestExercise(chest))
            })

        const bicepsFirebase = database.ref('exercise/biceps')
            .once('value')
            .then((snapshot) => {
                const biceps = [];

                snapshot.forEach((childSnapshot) => {
                    biceps.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                
                dispatch(setBicepsExercise(biceps))
            })

        const backFirebase = database.ref('exercise/back')
            .once('value')
            .then((snapshot) => {
                const back = []

                snapshot.forEach((childSnapshot) => {
                    back.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })

                dispatch(setBackExercise(back))
            })

        const legsFirebase = database.ref('exercise/legs')
            .once('value')
            .then((snapshot) => {
                const legs = []

                snapshot.forEach((childSnapshot) => {
                    legs.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                dispatch(setLegsExercise(legs))
            })

        const shouldersFirebase = database.ref('exercise/shoulders')
            .once('value')
            .then((snapshot) => {
                const shoulders = []

                snapshot.forEach((childSnapshot) => {
                    shoulders.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                dispatch(setShouldersExercise(shoulders))
            })
        
        const tricepsFirebase = database.ref('exercise/triceps')
            .once('value')
            .then((snapshot) => {
                const triceps = []

                snapshot.forEach((childSnapshot) => {
                    triceps.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                dispatch(setTricepsExercise(triceps))
            })

        return chestFirebase, bicepsFirebase, backFirebase, legsFirebase, shouldersFirebase, tricepsFirebase
    }
    
};

export { 
    addChestExercise, 
    addBicepsExercise, 
    addTricepsExercise, 
    addShoulderExercise, 
    addLegsExercise, 
    addBackExercise, 
    removeExercise, 
    editExercise,
}