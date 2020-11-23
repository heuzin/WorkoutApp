import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseFilters from '../ExerciseFilters';
import getVisibleExercises from '../selectors/exercise';

const TricepsPage = (props) => {
    return (
        <div>
        <ExerciseFilters />
        {
        props.triceps.length > 0 ?
        props.triceps.map((exercise) => {
            return (
                <div>
                    <Link to={`/edit/triceps/${exercise.id}`}>
                        <h1>{exercise.name}</h1>
                    </Link>
                    <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                </div>
            )
        }) : 
        <p>Add a triceps exercise to show here</p>
        }
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        triceps: getVisibleExercises(state.triceps, state.filters)
    }
}

export default connect(mapStatetoProps)(TricepsPage);