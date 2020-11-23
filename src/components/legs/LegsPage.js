import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseFilters from '../ExerciseFilters';
import getVisibleExercises from '../selectors/exercise'

const LegsPage = (props) => {
    return (
        <div>
            <ExerciseFilters />
            {
            props.legs.length > 0 ?
            props.legs.map((exercise) => {
                return (
                    <div>
                        <Link to={`/edit/legs/${exercise.id}`}>
                            <h1>{exercise.name}</h1>
                        </Link>
                        <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                    </div>
                )
            }) : 
            <p>Add a legs exercise to show here</p>
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        legs: getVisibleExercises(state.legs, state.filters)
    }
}

export default connect(mapStateToProps)(LegsPage);