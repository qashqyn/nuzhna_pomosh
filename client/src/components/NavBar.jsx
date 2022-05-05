import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import '../styles/navbar.scss';
import Logo from '../images/logo.png';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect>
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={Logo} height={64} alt="Жан Ашыр"/>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="justify-content-end">
                <Nav>
                    <LinkContainer to="about">
                        <Nav.Link>Біз туралы</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="fonds">
                        <Nav.Link>
                            Қорлар
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="partners">
                        <Nav.Link>Серіктестер</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="contacts#contact-list"> */}
                        <Nav.Link href="/contacts#contact-list">Бізбен байланыс</Nav.Link>
                    {/* </LinkContainer> */}
                </Nav>
            </Navbar.Collapse>
            <LinkContainer to="">
                <Navbar.Brand className="icon">
                    <FontAwesomeIcon icon={['fas', 'magnifying-glass']} size="lg" />
                </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/cabinet/profile">
                <Navbar.Brand className="icon">
                    <FontAwesomeIcon icon={['far', 'user']} size="lg" />
                </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/">
                <Navbar.Brand >
                    Бізге көмек
                </Navbar.Brand>
            </LinkContainer>
        </Navbar>
    );
};

export default NavBar;