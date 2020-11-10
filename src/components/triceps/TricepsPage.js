import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TricepsPage = (props) => {
    return (
        <div>
        {props.triceps.map((exercise) => {
            return (
                <div>
                    <Link to={`/edit/triceps/${exercise.id}`}>
                        <h1>{exercise.name}</h1>
                    </Link>
                    <p>{exercise.series} - {exercise.reps} - {exercise.member}</p>
                </div>
            )
        })}
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        triceps: state.triceps
    }
}

export default connect(mapStatetoProps)(TricepsPage);