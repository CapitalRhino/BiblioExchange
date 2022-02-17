import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/BookList';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
ReactDOM.render(
   <>
   <Router>
      <Routes>
         <Route path="/" element={<Navbar/>}>
            <Route index element={<BookList />} />
         </Route>
         <Route path='/Login' element={<Login/>}></Route>\
         <Route path='/Register' element={<Register />}></Route>
      </Routes>
   </Router>
   </>,
rootElement);

