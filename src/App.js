import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav'
import Footer from './components/Footer';
import Home from '../../src/components/Home';
import Login from './components/Login';
import CadastroUsuario from './components/CadastroUsuario';
import Agendamento from './components/Agendamento';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import  './components/App.css';

function App() {
    return (
        <Router>
            <div>
                <TopNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
                    <Route path="/Agendamento" element={<Agendamento />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;



