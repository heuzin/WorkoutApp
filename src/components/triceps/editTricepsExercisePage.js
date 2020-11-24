import React from 'react';
import { connect } from 'react-redux';
import { startEditTricepsExercise, startRemoveTricepsExercise } from '../../actions/exercises';
import ExerciseForm from '../ExerciseForm';

const editTricepsExercisePage = (props) => {
    return (
        <div>
            <ExerciseForm 
                exercise={props.exercise}
                onSubmit={(exercise) => {
                    props.dispatch(startEditTricepsExercise(props.match.params.id, exercise))
                    props.history.push('/triceps')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveTricepsExercise({ id: props.match.params.id }))
                props.history.push('/triceps')
            }}>Delete</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        exercise: state.triceps.find((exercise) => {
            return exercise.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(editTricepsExercisePage);