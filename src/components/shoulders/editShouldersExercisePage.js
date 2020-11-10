import React from 'react';
import { connect } from 'react-redux';
import { editExercise } from '../../actions/exercises';
import ExerciseForm from '../ExerciseForm';

const editShouldersExercisePage = (props) => {
    return (
        <div>
            <ExerciseForm 
                exercise={props.exercise}
                onSubmit={(exercise) => {
                    props.dispatch(editExercise(props.match.params.id, exercise))
                    props.history.push('/shoulders')
                }}
            />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        exercise: state.shoulders.find((exercise) => {
            return exercise.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(editShouldersExercisePage);