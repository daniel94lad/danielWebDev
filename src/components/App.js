import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import LandingPage from '../components/LandingPage';
import Contact from '../components/Contact';
import Navbar from './General/Navbar';
import Footer from './General/Footer';
// import logo from './logo.svg';


const App =() =>(
  <BrowserRouter>
  <Navbar/>
    <div className="margen">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/Contact" component={Contact}/>
    </div>
    <Footer/>
  </BrowserRouter>
);

export default App;
