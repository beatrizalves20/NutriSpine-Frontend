import React, { useState } from 'react';
//import Form from 'react-bootstrap/Form';

function Profile() {
    const [profileData, setProfileData] = useState({
        name: 'Nome do Usuário',
        email: 'email@exemplo.com',
        phone: '(11) 98765-4321',
    });

    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Lógica para salvar as atualizações do perfil
        console.log("Salvando perfil:", profileData);
        alert('Perfil atualizado com sucesso!');
    };

    return (
        
        <div>
            <h2>Sobre Nós</h2>
            <label>Nome:</label>
            <input type="text" name="name" value={profileData.name} onChange={handleChange} />

            <label>Email:</label>
            <input type="email" name="email" value={profileData.email} onChange={handleChange} />

            <label>Telefone:</label>
            <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} />

            <button onClick={handleSave}>Salvar Alterações</button>
        </div>
    );
}

export default Profile;