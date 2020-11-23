import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseFilters from '../ExerciseFilters';
import getVisibleExercises from '../selectors/exercise'

const BicepsPage = (props) => {
    return (
        <div>
            <ExerciseFilters />
            {
            props.biceps.length > 0 ?
            props.biceps.map((exercise) => {
                return (
                    <div>
                        <Link to={`/edit/biceps/${exercise.id}`}>
                            <h1>{exercise.name}</h1>
                        </Link>
                        <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                    </div>
                    )
            }) : 
            <p>Add a biceps exercise to show here</p>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        biceps: getVisibleExercises(state.biceps, state.filters)
    }
}

export default connect(mapStateToProps)(BicepsPage)