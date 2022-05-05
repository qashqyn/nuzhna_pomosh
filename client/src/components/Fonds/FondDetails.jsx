import React, { useEffect } from "react";
import { Col, Container, Form, Image, Nav, Row, Spinner, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFondById } from "../../actions/fonds";

import '../../styles/fondDetails.scss';

const FondDetails = () => {
    const {post: fond, isLoading} = useSelector((state) => state.posts); 
    const { id } = useParams();    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFondById(id));
    }, [id, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id="fond-details">
            <Container>
            
            {isLoading ? (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        ) : (
            <Row>
                <Col xs={12} md={9}>
                    <div className="fond" id="about">
                        <div className="fond-location">
                            {fond.location}
                        </div>
                        <div className="fond-image">
                            <Image src={fond.img} />
                        </div>
                        <h1 className="fond-title">{fond.title}</h1>
                        <div className="description">
                            {fond.description}
                        </div>
                        <a href="#help" className="help-btn">Көмек беру</a>
                    </div>
                    <div id="help">
                        <div className="content">
                            <h1>Көмек беру</h1>
                            <p>"{fond.title}" қорына көмек берініз</p>
                            <Form className="form" onSubmit={handleSubmit}>
                                <h5>Қайырымдылық түрі мен мөлшерін таңдаңыз</h5>
                                <Form.Group className="form-group">
                                    <Row xs={2}>
                                        <Col><Form.Check type="radio" name="donationType" id="monthlyDonation" value="monthlyDonation" label="Ай сайын қайымдылық садақасын беру" defaultChecked /></Col>
                                        <Col><Form.Check type="radio" name="donationType" id="permanentDonation" value="permanentDonation" label="Бір рет қайымдылық садақасын беру" /></Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Row>
                                        <Col xs={3}><Form.Check type="radio" name="donationAmount" id="amount100" value="100" label="100₸" defaultChecked /></Col>
                                        <Col xs={3}><Form.Check type="radio" name="donationAmount" id="amount500" value="500" label="500₸" /></Col>
                                        <Col xs={3}><Form.Check type="radio" name="donationAmount" id="amount1000" value="1000" label="1 000₸" /></Col>
                                        <Col xs={3}><Form.Check type="radio" name="donationAmount" id="amount3000" value="3000" label="3 000₸" /></Col>
                                        <Col xs={3}><Form.Check type="radio" name="donationAmount" id="amount5000" value="5000" label="5 000₸" /></Col>
                                        <Col xs={3}><Form.Check type="radio" name="donationAmount" id="amount10000" value="10000" label="10 000₸" /></Col>
                                        <Col xs={6}></Col>
                                    </Row>
                                </Form.Group>
                                    <Button type="submit" >Төлемге өту</Button>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col className="sidebar d-none d-md-block" xs={2}>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="#about">Қор туралы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#help">Көмек беру</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        )}
            </Container>
        </div>
    );
        
}

export default FondDetails;