import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LegsPage = (props) => {
    return (
        <div>
            {props.legs.map((exercise) => {
                return (
                    <div>
                        <Link to={`/edit/legs/${exercise.id}`}>
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
        legs: state.legs
    }
}

export default connect(mapStateToProps)(LegsPage);