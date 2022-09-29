import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../image/Icon.png'

import "bootstrap/dist/css/bootstrap.min.css";
import ModalRegister from './ModalRegister';
import ModalLogin from './ModalLogin';

function NavbarUser() {
    return (
        <div className='sticky-top d-flex'>
        <Navbar collapseOnSelect expand="lg" bg="" variant="" style={{backgroundColor:""}} className="w-100">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={icon} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            <ModalLogin />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <ModalRegister />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavbarUser