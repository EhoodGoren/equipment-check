import React, { useRef } from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/actions/userActions";

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
        <div id='login'>
            <h2>Worker details</h2>
            <label for='name' >Full name</label><br />
            <input name='name' placeholder="Enter name" ref={nameInput} />
            <label for='workplace'>Workplace</label><br />
            <input name='workplace' placeholder="Enter work place" ref={workplaceInput} />
            <label for='date'>Date</label><br />
            <input name='date' type='date' ref={dateInput} />
            <button onClick={submitUser}>Submit</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: (name, workplace, date) => dispatch(setUser(name, workplace, date))
    }
}

export default connect(null, mapDispatchToProps)(Login);
