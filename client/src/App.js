import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/NavBar';
import Footer from './components/FooTer';
import Page404 from './components/Page404';
import Home from './components/Home';
import Fonds from './components/Fonds/Fonds';
import Contacts from './components/Contacts';
import Partners from './components/Partners';
import FondDetails from './components/Fonds/FondDetails';
import Cabinet from './components/Cabinet/Cabinet';
import Profile from './components/Cabinet/Profile';
import Donation from './components/Cabinet/Donation';
import AddFond from './components/Cabinet/admin/AddFond';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='main'>
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path='/cabinet' element={<Cabinet />} >
                        <Route path='donation' element={<Donation />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='add-fond' element={<AddFond />} />
                    </Route>
                    <Route path="about" exact element={<Contacts />} />
                    <Route path="/fonds" exact element={<Fonds />} />
                    <Route path="/fonds/:id" element={<FondDetails />} />
                    <Route path="/contacts" exact element={<Contacts /> } />
                    <Route path='/partners' exact element={<Partners /> }/>
                    <Route path='*' element={<Page404 />}/>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;