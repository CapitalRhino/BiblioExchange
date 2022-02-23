import React from 'react'
import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<BookList />} />
            </Route>
            <Route path='/Login' element={<Login />}></Route>\
            <Route path='/Register' element={<Register />}></Route>
        </Routes>
    )
}

export default App