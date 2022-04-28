import React, { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createFond } from "../../../actions/fonds";

import '../styles/addfond.scss';

const initialData = {title: '', description: '', location: '', category: '', img: ''};

const locations = ['Нұр-Сұлтан','Алматы'];
const categories = ['Барлығына','Ересектерге','Балаларға','Әйелдерге','Жануарлар','Қоғамға','Жасөспірімдерге','Қарттарға','Отбасыларға','Экологияға'];

const AddFond = ({fond}) => {
    const [formData, setFormData] = useState(initialData);

    const dispatch = useDispatch();

    const handleChange = (e) =>{
        if(e.target.name === 'category'){
            let categories = [];
            if(formData.category.length > 0)
                categories = formData.category.split(',');
            if(e.target.checked)
                categories.push(e.target.value);
            else{
                if(categories.includes(e.target.value)){
                    categories.splice(categories.indexOf(e.target.value), 1);
                }
            }
            setFormData({...formData, category: categories.join(',')})
        }else{
            setFormData({...formData, [e.target.name]: e.target.value});
        }
    }
    const handleImage = async (e) =>{
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setFormData({...formData, [e.target.name]: base64});
        checkForm();
    }

    const checkForm = () => {

    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createFond(formData));
    };
    return (
        <div id="addfond">
            {fond ? (
                <h1>Қор жайлы информацияны өзгеру</h1>
            ) : (
                <h1>Жаңа қор қосу</h1>
            )}
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="image">
                            <div className="image-preview">
                                {formData.img ? (
                                    <Image src={formData.img} />
                                ) : (
                                    <div>
                                        СУРЕТ ЖОК
                                    </div>
                                )}
                            </div>
                            <Form.Label>Сурет тандау</Form.Label>
                            <Form.Control name="img" type="file" accept="image/*" onChange={handleImage} className="d-none" />
                        </Form.Group>
                    </Col>
                    <Col className="flex-grow">     
                        <Form.Group controlId="title">
                            <Form.Label>Атауы</Form.Label>
                            <Form.Control name="title" type="text" placeholder="Қор атауы" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="location">
                            <Form.Label>Орналасқан жері</Form.Label>
                            <Form.Select name="location" onChange={handleChange}>
                                <option value="">Қала</option>
                                {locations.map((location,key) => (
                                    <option key={key} value={location}>{location}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Кімге арналған</Form.Label>
                            <Row xs={1} md={2} lg={3}>
                                {categories.map((category,key) => (
                                    <Col key={key}>
                                        <Form.Check name="category" id={`category-${category}`} value={category} label={category} onChange={handleChange}/>
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="description">
                    <Form.Label>Мағлұмат</Form.Label>
                    <Form.Control as="textarea" onChange={handleChange} name="description"></Form.Control>
                </Form.Group>
                <Button type="submit">{fond ? 'Өзгерту' : 'Қосу'}</Button>
            </Form>
        </div>
    );
}

export default AddFond;