import React from 'react';
import { connect } from 'react-redux';
import ExerciseName from './ExerciseName';

const Exercises = (props) => {
    return (
        <div>
            <h1>Exercises</h1>
            {props.exercises.map((exercise) => {
                return <ExerciseName key={exercise.id} {...exercise}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        exercises: state
    }
}

export default connect(mapStateToProps)(Exercises);