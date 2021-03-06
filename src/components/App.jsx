import React from 'react'
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Navbar from './Navbar';
import NotFound from './Pages/NotFound';
import './App.css';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

const App= () => {
    return (<>
        <Router basename="/ReactWebDemo">
            <Navbar/>
            <Routes>
                <Route path= "/" element= {<Home/>}/>
                <Route path= "/about" element= {<About/>}/>
                <Route path= "/contact" element= {<Contact/>}/>
                <Route path= "/projects" element= {<Projects/>}/> 
                <Route path = '*' element = {<NotFound/>}/>             
            </Routes> 
        </Router>
        </>
    );
}

export default App;