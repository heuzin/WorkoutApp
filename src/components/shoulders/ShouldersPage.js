import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseFilters from '../ExerciseFilters';
import getVisibleExercises from '../selectors/exercise';

const ShouldersPage = (props) => {
    return (
        <div>
            <ExerciseFilters />
            {
            props.shoulders.length > 0 ?
            props.shoulders.map((exercise) => {
                return (
                    <div key={exercise.id}>
                        <Link to={`/edit/shoulders/${exercise.id}`}>
                            <h1>{exercise.name}</h1>
                        </Link>
                        <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                    </div>
                )
            }) :
            <p>Add a shoulders exercise to show here</p>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        shoulders: getVisibleExercises(state.shoulders, state.filters)
    }
}

export default connect(mapStateToProps)(ShouldersPage);