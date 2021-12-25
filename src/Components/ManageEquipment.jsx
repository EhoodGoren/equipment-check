import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import Equipment from "./Equipment";
import AddItemForm from "./AddItemForm";

function ManageEquipment({ name, workplace, date }) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/login');
    }
    const formatDate = date.split('-').reverse().join('-');
    return(
        <div>
            <button onClick={goBack}>🔙</button>
            <span> Logged in as: {name}, Workplace: {workplace}, Date: {formatDate}</span>
            <Equipment /><br />
            <AddItemForm />
        </div>
    )
}

function mapStateToProps({ user: { name, workplace, date } }) {
    return {
        name,
        workplace,
        date
    }
}

export default connect(mapStateToProps)(ManageEquipment);
