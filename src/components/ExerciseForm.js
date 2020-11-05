import React from 'react';

class ExerciseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.exercise ? props.exercise.name : '',
            series: props.exercise ? props.exercise.series : '',
            reps: props.exercise ? props.exercise.reps : '',
            notes: props.exercise ? props.exercise.notes : ''
        }
    }
    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
    }
    onSeriesChange = (e) => {
        const series = e.target.value
        this.setState(() => ({ series }))
    }
    onRepsChange = (e) => {
        const reps = e.target.value
        this.setState(() => ({ reps }))
    }
    onNotesChange = (e) => {
        const notes = e.target.value
        this.setState(() => ({ notes }))
    }
    onSubmit = (e) => {
        e.preventDefault()
       
        this.props.onSubmit({
            name: this.state.name,
            series: this.state.series,
            reps: this.state.reps,
            notes: this.state.notes
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text' 
                        value={this.state.name}
                        onChange={this.onNameChange} 
                        placeholder='Name'
                    />
                    <input 
                        type='number' 
                        value={this.state.series}
                        onChange={this.onSeriesChange} 
                        placeholder='Series'
                    />
                    <input 
                        type='number' 
                        value={this.state.reps}
                        onChange={this.onRepsChange} 
                        placeholder='Reps'
                    />
                    <input 
                        type='text' 
                        value={this.state.notes} 
                        onChange={this.onNotesChange}
                        placeholder='Notes'
                    />
                    <button>Add Exercise</button>
                </form>
            </div>
        )
    }
}

export default ExerciseForm