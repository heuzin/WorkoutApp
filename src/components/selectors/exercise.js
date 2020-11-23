const getVisibleExercises = (exercises, { text }) => {
    return exercises.filter((exercise) => {
        const textMatch = exercise.name.toLowerCase().includes(text.toLowerCase())

        return textMatch
    })
}

export default getVisibleExercises