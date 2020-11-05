import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseName = ({ id, name, member, series, reps }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h1>{name}</h1>
            </Link>
            <p>{series} - {reps} - {member}</p>
        </div>
    );
};

export default ExerciseName;