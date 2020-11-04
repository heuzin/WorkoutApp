import React from 'react';

const ExerciseName = ({ name, member, series, reps }) => {
    return (
        <div>
            Exercise: {name} - {series} - {reps} - {member}
        </div>
    );
};

export default ExerciseName;