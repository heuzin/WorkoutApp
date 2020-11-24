import React from 'react';
import { connect } from 'react-redux';
import { editExercise, startRemoveLegsExercise } from '../../actions/exercises';
import ExerciseForm from '../ExerciseForm';

const editLegsExercisePage = (props) => {
    return (
        <div>
            <ExerciseForm
                exercise={props.exercise}
                onSubmit={(exercise) => {
                    props.dispatch(editExercise(props.match.params.id, exercise))
                    props.history.push('/legs')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveLegsExercise({ id: props.match.params.id }))
                props.history.push('/legs')
            }}>Delete</button>
        </div>
    )
}

const mapStatToProps = (state, props) => {
    return {
        exercise: state.legs.find((exercise) => {
            return exercise.id === props.match.params.id
        })
    }
}

export default connect(mapStatToProps)(editLegsExercisePage)