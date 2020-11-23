import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

class ExerciseFilters extends React.Component {
    render() {
        return (
            <div>
                <input 
                    type='text'
                    value={this.props.filters.name}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExerciseFilters)