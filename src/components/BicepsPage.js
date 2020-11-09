import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BicepsPage = (props) => {
    return (
        <div>
            {props.biceps.map((exercise) => {
                return (
                    <div>
                        <Link to={`/edit/${exercise.id}`}>
                            <h1>{exercise.name}</h1>
                        </Link>
                        <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        biceps: state.biceps
    }
}

export default connect(mapStateToProps)(BicepsPage)