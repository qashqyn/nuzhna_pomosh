import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import './styles/sidebar.scss';
const Sidebar = () => {
    return (
        <div id="sidebar">
            <Nav className="flex-column">
                <LinkContainer to="donation">
                    <Nav.Link>Қайырымдылық</Nav.Link>
                </LinkContainer>
                <LinkContainer to="profile">
                    <Nav.Link>Аккаунт баптаулары</Nav.Link>
                </LinkContainer>
                <LinkContainer to="start-donation">
                    <Nav.Link>Алым ашу</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    );
};

export default Sidebar;