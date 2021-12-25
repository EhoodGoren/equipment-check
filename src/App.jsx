import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Equipment from './Components/Equipment';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/equipment' element={<Equipment />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
