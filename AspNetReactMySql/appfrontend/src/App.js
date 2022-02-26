import React from 'react'
import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './AuthProvider';
import './Styles/App.css'
function App() {
    return (
        <AuthProvider>
            <main className='App'>
                <Routes>
                        <Route path="/" element={<Navbar />} />
                        <Route path='/Login' element={<Login />}></Route>\
                        <Route path='/Register' element={<Register />}></Route>
                    </Routes>
            </main>
        </AuthProvider>

    )
}

export default App