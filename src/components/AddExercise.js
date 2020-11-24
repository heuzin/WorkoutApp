import React from 'react';
import ExerciseForm from './ExerciseForm';
import { connect } from 'react-redux';
import { startAddBackExercise, startAddBicepsExercise, startAddChestExercise, startAddLegsExercise, startAddShouldersExercise, startAddTricepsExercise } from '../actions/exercises';

class AddExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            member: 'chest'
        }
    }
    onChestChange = (e) => {
        console.log(e.target.value)
        const member = e.target.value
        this.setState(() => ({ member }))
    }
    onSubmit = (exercise) => {
        switch (this.state.member) {
            case 'chest':
                this.props.dispatch(startAddChestExercise(exercise))
                this.props.history.push('/chest')
                break;
            case 'back':
                this.props.dispatch(startAddBackExercise(exercise))
                this.props.history.push('/back')
                break;
            case 'biceps':
                this.props.dispatch(startAddBicepsExercise(exercise))
                this.props.history.push('/biceps')
                break;
            case 'triceps':
                this.props.dispatch(startAddTricepsExercise(exercise))
                this.props.history.push('/triceps')
                break;
            case 'sholders':
                this.props.dispatch(startAddShouldersExercise(exercise))
                this.props.history.push('/shoulders')
                break;
            case 'legs':
                this.props.dispatch(startAddLegsExercise(exercise))
                this.props.history.push('/legs')
                break;
        }
    }
    render() {
        return (
            <div>
                <h1>Add Exercise</h1>
                <select onChange={this.onChestChange}>
                    <option value='chest'>Chest</option>
                    <option value='back'>Back</option>
                    <option value='biceps'>Biceps</option>
                    <option value='triceps'>Triceps</option>
                    <option value='sholders'>Sholders</option>
                    <option value='legs'>Legs</option>
                </select>
                <ExerciseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default connect()(AddExercise)