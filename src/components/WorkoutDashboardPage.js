import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutDashboardPage = () => (
    <div>
        <h1>Dashboard</h1>
        <Link to='/chest'><h1>Chest</h1></Link>
        <Link to='/back'><h1>Back</h1></Link>
        <Link to='/biceps'><h1>Biceps</h1></Link>
        <Link to='/triceps'><h1>Tricpes</h1></Link>
        <Link to='/shoulders'><h1>Shoulders</h1></Link>
        <Link to='/legs'><h1>Legs</h1></Link>
    </div>
)

export default WorkoutDashboardPage;