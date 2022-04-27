import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'
import Works from './components/Works';
import Footer from  './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Section/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
