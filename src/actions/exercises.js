import { v4 as uuidv4 } from 'uuid';

// ADD CHEST
const addChestExercise = ({ name = '', series = 0,  reps = 0, note = '', member = 'Chest' } = {}) => ({
    type: 'ADD_CHEST_EXERCISE',
    chest: {
        id: uuidv4(),
        name,
        series,
        reps,
        note,
        member
    }
})

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
    exercise: {
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
    exercise: {
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

export { addChestExercise, addBicepsExercise, addTricepsExercise, addShoulderExercise, addLegsExercise, removeExercise, editExercise }