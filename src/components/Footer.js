import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#f8f8f8', padding: '20px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} NutriSpine. Todos os direitos reservados.</p>
            <p>Contato: contato@nutrispine.com | Telefone: (11) 1234-5678</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="/">Termos de Serviço</a></li>
                <li><a href="/">Política de Privacidade</a></li>
            </ul>
        </footer>
    );
}

export default Footer;