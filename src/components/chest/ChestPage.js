import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseFilters from '../ExerciseFilters';
import getVisibleExercises from '../selectors/exercise'

const ChestPage = (props) => {
    return (
        <div>
            <ExerciseFilters />
            {
            props.chest.length > 0 ?
                props.chest.map((exercise) => {
                return (
                    <div key={exercise.id}>
                        <Link to={`/edit/chest/${exercise.id}`}>
                            <h1>{exercise.name}</h1>
                        </Link>
                        <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                    </div>
                )
            }) : 
            <p>Add a chest exercise to show here</p>
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chest: getVisibleExercises(state.chest, state.filters)
    }
}

export default connect(mapStateToProps)(ChestPage)