import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact'
import About from './components/About'
import Pages from './components/Pages'
import Portifolio from './components/Portfolio'
import Blog from './components/Blog'
import Works from './components/Works';


ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path = '/About' element={<About/>}/>
          <Route path = '/Pages' element = {<Pages/>}/>
          <Route path = '/Portifolio' element = {<Portifolio/>}/>
          <Route path = '/Blog' element = {<Blog/>}/>
          <Route path='/Works'element = {<Works/>}/>
        </Routes>
    </Router>,
  document.getElementById('root')
);

