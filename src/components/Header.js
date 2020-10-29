import React from "react";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <NavLink to='/' exact={true}>Home</NavLink>
            <NavLink to='/create'>Create Workout</NavLink>
        </header>
    );
};

export default Header;