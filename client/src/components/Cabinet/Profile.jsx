import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Row, Col, Nav, Image} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDonationsByUserId } from '../../actions/donations';
import { getEventsByUserId } from '../../actions/events';

import DonationsIcon from '../../images/donations.svg';
import EventsIcon from '../../images/events.svg';
import PermanentDonationIcon from '../../images/permanent.svg';
import MonthlyDonationIcon from '../../images/monthly.svg';
import EventGreensIcon from '../../images/events_green.svg';

import './styles/profile.scss';

const Profile = () => {
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const {donations, events} = useSelector((state)=>state.posts);

    const [donationsCount, setDonationsCount] = useState({permanent: 0, monthly: 0});

    const dispatch = useDispatch();

    useEffect(()=>{
        if(profile.user && profile.user.id){
            dispatch(getDonationsByUserId(profile.user.id));
            dispatch(getEventsByUserId(profile.user.id));
        }
    }, [profile]);

    useEffect(()=>{
        if(donations){
            let monthly = 0;
            let permanent = 0;

            for (let index = 0; index < donations.length; index++) {
                const donation = donations[index];
                if(donation.type === 'permanent') permanent++;
                if(donation.type === 'monthly') monthly++;
            }
            setDonationsCount({permanent: permanent, monthly: monthly});
        }
    }, [donations]);

    return (
        <>
            <h1>Жеке кабинет</h1>
            {/* <div className='block'>

            </div> */}
            <Row className='flex-lg-row-reverse justify-content-end'>
                <Col xs={12} lg={3}>
                    <Nav className='countbar d-flex flex-row flex-lg-column'>
                        <Nav.Item>
                            <div className='icon'>
                                <Image src={DonationsIcon} />
                            </div>
                            <div>
                                <p>Садақа саны</p>
                                <span>{donations && donations.length}</span>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className='icon'>
                                <Image src={EventsIcon} />
                            </div>
                            <div>
                                <p>Жасаған алымдар</p>
                                <span>{events && events.length}</span>
                            </div>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={12} lg={8} className="blocks">
                    <div className='block'>
                        <div className='block-header'>
                            <div className='icon'>
                                <Image src={MonthlyDonationIcon} />
                            </div>
                            Ай сайындық қайырымдылықтар
                        </div>
                        <div className='donations'>
                            {donationsCount.monthly === 0 ? (
                                <p>Садақа жоқ</p>
                            ) : donations.map((donation) => donation.type === 'monthly' && (
                                    <div className='donation'>
                                        <span className='amount'>{donation.amount} ₸</span>        
                                        <span className='date'>{donation.date}</span>        
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='block'>
                        <div className='block-header'>
                            <div className='icon'>
                                <Image src={PermanentDonationIcon} />
                            </div>
                            Бір реттік қайырымдылықтар
                        </div>
                        <div className='donations'>
                            {donationsCount.permanent === 0 ? (
                                <p>Садақа жоқ</p>
                            ) : donations.map((donation, key) => donation.type === 'permanent' && (
                                    <div className='donation' key={key}>
                                        <span className='amount'>{donation.amount} ₸</span>        
                                        <span className='date'>{moment(donation.date).format('HH.mm DD.MM.YYYY')}</span>        
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='block'>
                        <div className='block-header'>  
                            <div className='icon'>
                                <Image src={EventGreensIcon} />
                            </div>
                            Алымдар
                        </div>
                        <div className='events'>
                            {!(events && events.length > 0) ? (
                                <p>Алымдар жоқ</p>
                            ) : events.map((event, key) => (
                                    <div className='event' key={key}>
                                        <span className='amount'>{event.title}</span>        
                                        <span className='date'>{moment(event.date).format('HH.mm DD.MM.YYYY')}</span>        
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Profile;