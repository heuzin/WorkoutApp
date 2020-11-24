import React from 'react';
import { connect } from 'react-redux';
import { startEditChestExercise, startRemoveChestExercise } from '../../actions/exercises';
import ExerciseForm from '../ExerciseForm';

const editChestExercisePage = (props) => {
    return (
        <div>
            <ExerciseForm         
                exercise={props.exercise}
                onSubmit={(exercise) => {
                    props.dispatch(startEditChestExercise(props.match.params.id, exercise))
                    props.history.push('/chest')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveChestExercise({ id: props.match.params.id }))
                props.history.push('/chest')
            }}>Delete</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        exercise: state.chest.find((exercise) => {
            return exercise.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(editChestExercisePage)