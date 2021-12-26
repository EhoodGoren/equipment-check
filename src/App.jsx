import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Components/Login';
import ManageEquipment from './Components/ManageEquipment';

function App({ user }) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/equipment' element={
                    !Object.keys(user).length ?
                    <Login /> :
                    <ManageEquipment />} />
            </Routes>
        </BrowserRouter>
    )
}

function mapStateToProps({ user }) {
    return {
        user
    }
}

export default connect(mapStateToProps)(App);
