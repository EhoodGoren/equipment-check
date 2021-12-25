import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import ManageEquipment from './Components/ManageEquipment';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/equipment' element={<ManageEquipment />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
