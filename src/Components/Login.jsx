import React, { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/actions/userActions";
import Signature from "./Signature";
import './Login.css';

function Login({ name, workplace, date, setUser }) {
    const initialInputs = {
        name: name || '',
        workplace: workplace || '',
        date: date || ''
    }
    const [inputs, setInputs] = useState(initialInputs);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const submitUser = () => {
        const {name, workplace, date} = inputs;
        setUser(name, workplace, date);
        navigate('/equipment');
    }
    return(
        <div id='login-form'>
            <h2 id='login-title'>Worker details</h2>
            <div id='login-name'>
                <label htmlFor='name' >Full name</label><br />
                <input name='name' placeholder="Enter name" value={inputs.name} onChange={handleChange} />
            </div>
            <div id='login-workplace'>
                <label htmlFor='workplace'>Workplace</label><br />
                <input name='workplace' placeholder="Enter work place" value={inputs.workplace} onChange={handleChange} />
            </div>
            <div id='login-date'>
                <label htmlFor='date'>Date</label><br />
                <input name='date' type='date' value={inputs.date} onChange={handleChange} />
            </div>
            <button id='login-submit' onClick={submitUser}>Submit</button>
            <div id='signature'>
                <Signature />
            </div>
        </div>
    )
}

function mapStateToProps({ user: { name, workplace, date }}) {
    return {
        name,
        workplace,
        date
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: (name, workplace, date) => dispatch(setUser(name, workplace, date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
