import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica de autenticação
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Senha:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Entrar</button>
            </form>
            <p className="mt-3 text-center">
                <a href="/register" className="text-decoration-none">Não tem uma conta? Cadastre-se</a>
            </p>
        </div>
    </div>
    );
}

export default Login;