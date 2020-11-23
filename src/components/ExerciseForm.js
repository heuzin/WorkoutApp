import React from 'react';

class ExerciseForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: props.exercise ? props.exercise.name : '',
            series: props.exercise ? props.exercise.series : '',
            reps: props.exercise ? props.exercise.reps : '',
            notes: props.exercise ? props.exercise.notes : '',
            error: ''
        }
    }
    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
    }
    onSeriesChange = (e) => {
        const series = e.target.value
        if (!series || series.match(/^\d{1,2}$/)) {
            this.setState(() => ({ series }))
        }
    }
    onRepsChange = (e) => {
        const reps = e.target.value
        if (!reps || reps.match(/^\d{1,2}$/)) {
            this.setState(() => ({ reps }))
        }
    }
    onNotesChange = (e) => {
        const notes = e.target.value
        this.setState(() => ({ notes }))
    }
    onSubmit = (e) => {
        e.preventDefault()
       
        if (!this.state.name || !this.state.series || !this.state.reps) {
            this.setState(() => ({ error: 'Please provide a name, number of series and reps.'}))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                name: this.state.name,
                series: this.state.series,
                reps: this.state.reps,
                notes: this.state.notes
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text' 
                        value={this.state.name}
                        onChange={this.onNameChange} 
                        placeholder='Name'
                    />
                    <input 
                        type='text'
                        value={this.state.series}
                        onChange={this.onSeriesChange} 
                        placeholder='Series'
                    />
                    <input 
                        type='text' 
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