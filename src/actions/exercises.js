// ADD EXERCISE
const addExercise = ({ name = '', series = 0,  reps = 0, note = '', member = '' }) => ({
    type: 'ADD_EXERCISE',
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

export { addExercise }