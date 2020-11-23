import React from "react";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <NavLink to='/' exact={true}>Home</NavLink>
            <NavLink to='/create'>Create Workout</NavLink>
        </header>
    );
};

export default Header;