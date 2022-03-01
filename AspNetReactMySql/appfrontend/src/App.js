import React from 'react'
import BookList from './Books/BookList';
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { AuthProvider } from './Auth/AuthProvider';
import './Styles/App.css'
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Unauthorized from './Auth/Unauthorized';
import RequireAuth from './Auth/RequireAuth';
function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route exact path='/Login' element={<Login />} />
                    <Route exact path='/Register' element={<Register />} />
                    <Route exact path='UnAuthorized' element={<Unauthorized />} />
                    <Route element={<RequireAuth allowedroles={['Admin']}/>}>
                        <Route exact path='/Books' element={<BookList />} />
                    </Route>

                </Route>
            </Routes>
        </AuthProvider>

    )
}

export default App