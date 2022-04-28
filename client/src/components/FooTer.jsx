import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Button, Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
 
import '../styles/footer.scss';
import Feedback from '../images/feedback.png';

const FooTer = () => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    return (
        <div id="footer">
            <Container>
                <h3>
                    Сұрақтарыңыз барма? Жаза кетіңіз
                </h3>

                <Row>
                    <Col xs={12} md={8}>
                        <Form onSubmit={handleSubmit}>
                            <Row xs={1} md={2}>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Аты-жөніңіз" name="fullname" onChange={handleChange} required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Почтаңыз" name="email" onChange={handleChange} required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Телефон нөміріңіз" name="phoneNumber" onChange={handleChange} required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Select className="form-control" name="subject" onChange={handleChange} required>
                                            <option value="">Сұрақ тақырыбы</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="textarea">
                                <Form.Group>
                                    <Form.Control as="textarea" placeholder="Жолдайтын сұрағыңыз...." name="message" onChange={handleChange} rows={3} />
                                </Form.Group>
                                <Button type="submit">
                                   <FontAwesomeIcon icon={['fas', 'arrow-right']} size="sm" />
                                </Button>
                            </div>
                            <Form.Check id="checkbox1" type="checkbox" className="checkbox" required label="Мен жеке деректерімді өңдеуге келісемін." />
                            <Form.Check id="checkbox2" type="checkbox" className="checkbox" required label="Мен құпиялылық саясатымен келісемін." />
                        </Form>
                    </Col>
                    <Col xs={4} className="d-none d-md-flex">
                        <Image className="feedback-image" src={Feedback} />
                    </Col>
                </Row>
                <div className="bottom">
                    <LinkContainer to="/">
                        <a href="/" className="help">
                            ЖанАшыр
                        </a>
                    </LinkContainer>
                    <div className="copyright">
                        2022 © Барлық құқықтар қорғалған
                    </div>
                    <a href="tel:+77764960519" className="phone">
                        <FontAwesomeIcon icon={['fas', 'phone']} size="sm" /> +7 776 496 05 19
                    </a>
                </div>


            </Container>
        </div>
    );
};

export default FooTer;