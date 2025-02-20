import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom';

const TopNav = () => {

    const menuData = [
        {
            path: '/',
            name: "Home"
        },
        {
            path: '/Dashboard',
            name: "Consultas"
        },
        {
            path: '/Profile',
            name: "Quem Somos"
        },
        {
            path: '/Appointment',
            name: "Agendamento"
        },
        {
            path: '/Login',
            name: "Login"
        },
        {
            path: '/Register',
            name: "Cadastro"
        }
    ]

    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="brand">NutriSpine</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menuData.map((item) => (
                                <NavLink to={item.path} key={item.name}>
                                    <div className="list_item">{item.name}</div>

                                </NavLink>
                            ))

                        }
                    </Nav>
                    <Nav className="ms-auto">
                        <button className="btn btn-success">Cadastre-se</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;