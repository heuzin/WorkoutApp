import React from 'react';
import ExerciseForm from './ExerciseForm';
import { connect } from 'react-redux';
import { addChestExercise } from '../actions/exercises';

const AddExercise = (props) => (
    <div>
        <h1>Add Exercise</h1>
        <ExerciseForm 
            onSubmit={(exercise) => {
                props.dispatch(addChestExercise(exercise))
                props.history.push('/')
            }}
        />
    </div>
)

export default connect()(AddExercise)