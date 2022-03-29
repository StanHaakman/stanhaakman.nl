import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Header from './components/Header';


ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      <Header />
      <App />
      <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
