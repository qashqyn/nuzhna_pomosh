import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Profile = ({user}) => {
    return (
        <>
            <h1>Жеке кабинет</h1>
            {/* <div className='block'>

            </div> */}
            <Row>
                <Col xs={12} lg={9}>
                    <div className='block'>
                        <div className='block-header'>
                        Ай сайындық қайырымдылық беру
                        </div>
                        <div>

                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Profile;