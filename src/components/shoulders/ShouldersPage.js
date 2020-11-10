import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ShouldersPage = (props) => {
    return (
        <div>
            {props.shoulders.map((exercise) => {
                return (
                    <div>
                        <Link to={`/edit/shoulders/${exercise.id}`}>
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
        shoulders: state.shoulders
    }
}

export default connect(mapStateToProps)(ShouldersPage);