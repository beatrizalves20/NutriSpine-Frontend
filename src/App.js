import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/TopNav';
import Footer from './components/Footer';
import Home from '../../src/components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Appointment from './components/Appointment';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import  './components/App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/appointments" element={<Appointment />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

