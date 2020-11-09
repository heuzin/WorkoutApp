import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BackPage = (props) => {
    return (
        <div>
            {props.back.map((exercise) => {
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
        back: state.back
    }
}

export default connect(mapStateToProps)(BackPage)