import React from 'react';

const ExerciseName = ({ name, member }) => {
    return (
        <div>
            Exercise: {name} - {member}
        </div>
    );
};

export default ExerciseName;