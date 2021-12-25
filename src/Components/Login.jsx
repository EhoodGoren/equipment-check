import React, { useRef } from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/actions/userActions";
import './Login.css';

function Login({ setUser }) {
    const nameInput = useRef();
    const workplaceInput = useRef();
    const dateInput = useRef();
    const navigate = useNavigate();

    const submitUser = () => {
        setUser(nameInput.current.value, workplaceInput.current.value, dateInput.current.value);
        navigate('/equipment');
    }
    return(
        <div id='login-form'>
            <h2 id='login-title'>Worker details</h2>
            <div id='login-name'>
                <label htmlFor='name' >Full name</label><br />
                <input name='name' placeholder="Enter name" ref={nameInput} />
            </div>
            <div id='login-workplace'>
                <label htmlFor='workplace'>Workplace</label><br />
                <input name='workplace' placeholder="Enter work place" ref={workplaceInput} />
            </div>
            <div id='login-date'>
                <label htmlFor='date'>Date</label><br />
                <input name='date' type='date' ref={dateInput} />
            </div>
            <button id='login-submit' onClick={submitUser}>Submit</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: (name, workplace, date) => dispatch(setUser(name, workplace, date))
    }
}

export default connect(null, mapDispatchToProps)(Login);
