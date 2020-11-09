import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const ChestPage = (props) => {
    console.log(props)
    return (
        <div>
            {props.chest.map((exercise) => {
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
        chest: state.chest
    }
}

export default connect(mapStateToProps)(ChestPage)