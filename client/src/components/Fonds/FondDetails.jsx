import React from "react";
import { Container, Image, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const FondDetails = () => {
    const {post: fond, isLoading} = useSelector((state) => state.posts); 
    return 
        isLoading ? (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        ) : (
            <Container id="fond">
                <div className="fond-location">
                    {fond.location}
                </div>
                <Image className="fond-image" src={fond.image} />
                <h1 className="fond-title">{fond.title}</h1>
                <div className="description">
                    {fond.description}
                </div>
            </Container>
        );
}

export default FondDetails;