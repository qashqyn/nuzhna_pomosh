import React from "react";
import { useDispatch } from "react-redux";
import {Form, Row, Col, Button} from 'react-bootstrap';

import '../styles/donate.scss';

const Donate = ({fondId, eventId, fondname}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div id="help">
            <div className="content">
                <h1>Көмек беру</h1>
                <p>"{fondname}" қорына көмек берініз</p>
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
    )
}

export default Donate;