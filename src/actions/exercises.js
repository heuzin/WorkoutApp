import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase'

// ADD CHEST
const addChestExercise = (chest) => ({
    type: 'ADD_CHEST_EXERCISE',
    chest
})

export const startAddChestExercise = (chestData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            name = '', 
            series = 0,  
            reps = 0, 
            notes = '',
            member = 'Chest'
        } = chestData
        const chest = { name, series, reps, notes, member }

        database.ref(`users/${uid}/exercise/chest`).push(chest).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            name = '',
            series = 0,
            reps = 0,
            notes = '',
            member = 'Biceps'
        } = bicepsData
        const biceps = { name, series, reps, notes, member }

        database.ref(`users/${uid}/exercise/biceps`).push(biceps).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            name = '',
            series = 0,
            reps = 0,
            notes = '',
            member = 'Triceps'
        } = tricepsData
        const triceps = { name, series, reps, notes, member }

        database.ref(`users/${uid}/exercise/triceps`).push(triceps).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            name = '',
            series = 0,
            reps = 0,
            notes = '',
            member = 'Shoulder'
        } = shouldersData
        const shoulders = { name, series, reps, notes, member }

        database.ref(`users/${uid}/exercise/shoulders`).push(shoulders).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            name = '',
            series = 0,
            reps = 0,
            notes = '',
            member = 'Legs'
        } = legsData
        const legs = { name, series, reps, notes, member }

        database.ref(`users/${uid}/exercise/legs`).push(legs).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            name = '',
            series = 0,
            reps = 0,
            notes = '',
            member = 'back'
        } = backData
        const back = { name, series, reps, notes, member}

        database.ref(`users/${uid}/exercise/back`).push(back).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/chest/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveBicepsExercise = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/biceps/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveTricepsExercise = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/triceps/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveShouldersExercise = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/shoulders/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveLegsExercise = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/legs/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

export const startRemoveBackExercise = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/back/${id}`).remove().then(() => {
            dispatch(removeExercise({ id }))
        })
    }
}

// EDIT EXERCISE
const editChestExercise = (id, updates) => ({
    type: 'EDIT_CHEST_EXERCISE',
    id,
    updates
})

export const startEditChestExercise = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/chest/${id}`).update(updates).then(() => {
            dispatch(editChestExercise(id, updates))
        })
    }
}

const editBackExercise = (id, updates) => ({
    type: 'EDIT_BACK_EXERCISE',
    id,
    updates
})

export const startEditBackExercise = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/back/${id}`).update(updates).then(() => {
            dispatch(editBackExercise(id, updates))
        })
    }
}

const editBicepsExercise = (id, updates) => ({
    type: 'EDIT_BICEPS_EXERCISE',
    id,
    updates
})

export const startEditBicepsExercise = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/biceps/${id}`).update(updates).then(() => {
            dispatch(editBicepsExercise(id, updates))
        })
    }
}

const editLegsExercise = (id, updates) => ({
    type: 'EDIT_LEGS_EXERCISE',
    id,
    updates
})

export const startEditLegsExercise = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/legs/${id}`).update(updates).then(() => {
            dispatch(editLegsExercise(id, updates))
        })
    }
}

const editShouldersExercise = (id, updates) => ({
    type: 'EDIT_SHOULDERS_EXERCISE',
    id,
    updates
})

export const startEditShouldersExercise = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/shoulders/${id}`).update(updates).then(() => {
            dispatch(editShouldersExercise(id, updates))
        })
    }
}

const editTricepsExercise = (id, updates) => ({
    type: 'EDIT_TRICEPS_EXERCISE',
    id, 
    updates
})

export const startEditTricepsExercise = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/exercise/triceps/${id}`).update(updates).then(() => {
            dispatch(editTricepsExercise(id, updates))
        })
    }
}

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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const chestFirebase = database.ref(`users/${uid}/exercise/chest`)
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

        const bicepsFirebase = database.ref(`users/${uid}/exercise/biceps`)
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

        const backFirebase = database.ref(`users/${uid}/exercise/back`)
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

        const legsFirebase = database.ref(`users/${uid}/exercise/legs`)
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

        const shouldersFirebase = database.ref(`users/${uid}/exercise/shoulders`)
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
        
        const tricepsFirebase = database.ref(`users/${uid}/exercise/triceps`)
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
}