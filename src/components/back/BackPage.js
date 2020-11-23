import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseFilters from '../ExerciseFilters';
import getVisibleExercises from '../selectors/exercise'

const BackPage = (props) => {
    return (
        <div>
            <ExerciseFilters />
            {
            props.back.length > 0 ?      
            props.back.map((exercise) => {
                return (
                    <div>
                        <Link to={`/edit/back/${exercise.id}`}>
                            <h1>{exercise.name}</h1>
                        </Link>
                        <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                    </div>
                )
            }) : 
            <p>Add a back exercise to show here</p>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        back: getVisibleExercises(state.back, state.filters)
    }
}

export default connect(mapStateToProps)(BackPage)