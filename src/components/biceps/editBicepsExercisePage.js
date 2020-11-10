import React from 'react';
import { connect } from 'react-redux';
import { editExercise } from '../../actions/exercises';
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