import React from 'react';
import { connect } from 'react-redux';
import { startEditBicepsExercise, startRemoveBicepsExercise } from '../../actions/exercises';
import ExerciseForm from '../ExerciseForm';

const editBicepsExercisePage = (props) => {
    return (
        <div>
            <ExerciseForm
                exercise={props.exercise}
                onSubmit={(exercise) => {
                    props.dispatch(startEditBicepsExercise(props.match.params.id, exercise))
                    props.history.push('/biceps')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveBicepsExercise({ id: props.match.params.id }))
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