// ADD CHEST
const addChestExercise = ({ name = '', series = 0,  reps = 0, note = '', member = 'Chest' }) => ({
    type: 'ADD_CHEST_EXERCISE',
    exercise: {
        name,
        series,
        reps,
        note,
        member
    }
})

// ADD BICEPTS
const addBicepsExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Biceps'}) => ({
    type: 'ADD_BICEPS_EXERCISE',
    exercise: {
        name,
        series,
        reps,
        note,
        member
    }
})

// ADD TRICEPS
const addTricepsExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Triceps'}) => ({
    type: 'ADD_TRICEPS_EXERCISE',
    exercise: {
        name,
        series,
        reps,
        note,
        member
    }
})

// ADD SHOULDER
const addShoulderExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Shoulder'}) => ({
    type: 'ADD_SHOULDER_EXERCISE',
    exercise: {
        name,
        series,
        reps,
        note,
        member
    }
})

// ADD LEGS
const addLegsExercise = ({ name = '', series = 0, reps = 0, note = '', member = 'Legs'}) => ({
    type: 'ADD_LEGS_EXERCISE',
    exercise: {
        name,
        series,
        reps,
        note,
        member
    }
})

// REMOVE EXERCISE

// EDIT EXERCISE

export { addChestExercise, addBicepsExercise, addTricepsExercise, addShoulderExercise, addLegsExercise }