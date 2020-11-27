import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => {
    return (
        <header>
            <NavLink to='/dashboard' exact={true}>Dashboard</NavLink>
            <NavLink to='/create'>Create Workout</NavLink>
            <button onClick={startLogout}>Logout</button>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);