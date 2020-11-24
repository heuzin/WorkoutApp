import React from 'react';
import { connect } from 'react-redux';
import { startEditBackExercise, startRemoveBackExercise } from '../../actions/exercises';
import ExerciseForm from '../ExerciseForm'

const editBackExercisePage = (props) => {
    return (
        <div>
            <ExerciseForm 
                exercise={props.exercise}
                onSubmit={(exercise) => {
                    props.dispatch(startEditBackExercise(props.match.params.id, exercise))
                    props.history.push('/back')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveBackExercise({ id: props.match.params.id }))
                props.history.push('/back')
            }}>Delete</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        exercise: state.back.find((exercise) => {
            return exercise.id === props.match.params.id
        })
    }
};

export default connect(mapStateToProps)(editBackExercisePage);