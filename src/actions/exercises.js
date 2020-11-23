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
const addBicepsExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Biceps'} = {}) => ({
    type: 'ADD_BICEPS_EXERCISE',
    biceps: {
        id: uuidv4(),
        name,
        series,
        reps,
        note,
        member
    }
})

// ADD TRICEPS
const addTricepsExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Triceps'} = {}) => ({
    type: 'ADD_TRICEPS_EXERCISE',
    triceps: {
        id: uuidv4(),
        name,
        series,
        reps,
        note,
        member
    }
})

// ADD SHOULDER
const addShoulderExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Shoulder'} = {}) => ({
    type: 'ADD_SHOULDER_EXERCISE',
    shoulders: {
        id: uuidv4(),
        name,
        series,
        reps,
        note,
        member
    }
})

// ADD LEGS
const addLegsExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Legs'} = {}) => ({
    type: 'ADD_LEGS_EXERCISE',
    legs: {
        id: uuidv4(),
        name,
        series,
        reps,
        note,
        member
    }
})

const addBackExercise = ({ name='', series = 0, reps = 0, note = '', member = 'back'} ={}) => ({
    type: 'ADD_BACK_EXERCISE',
    back: {
        id: uuidv4(),
        name,
        series,
        reps,
        note,
        member
    }
})

// REMOVE EXERCISE
const removeExercise = ({ id } = {}) => ({
    type: 'REMOVE_EXERCISE',
    id
})

// EDIT EXERCISE
const editExercise = (id, updates) => ({
    type: 'EDIT_EXERCISE',
    id,
    updates
})

export { addChestExercise, addBicepsExercise, addTricepsExercise, addShoulderExercise, addLegsExercise, addBackExercise, removeExercise, editExercise }