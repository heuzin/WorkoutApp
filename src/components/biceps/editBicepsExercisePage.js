import React from 'react';
import { connect } from 'react-redux';
import { editExercise, removeExercise } from '../../actions/exercises';
import ExerciseForm from '../ExerciseForm';

const editBicepsExercisePage = (props) => {
    return (
        <div>
            <ExerciseForm
                exercise={props.exercise}
                onSubmit={(exercise) => {
                    props.dispatch(editExercise(props.match.params.id, exercise))
                    props.history.push('/biceps')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExercise({ id: props.match.params.id }))
                props.history.push('/biceps')
            }}>Delete</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        exercise: state.biceps.find((exercise) => {
            return exercise.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(editBicepsExercisePage);