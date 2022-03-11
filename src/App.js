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
import PersistLogin from './Auth/PersistLogin';
import Search from './Search/Search';
import Add from './Add/Add';
import Profile from './Profile/Profile';
import BookPage from './Books/BookPage';
function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route element={<PersistLogin />}>
                        <Route index element={<Home />} />
                        <Route path='/Book/:id' element={<BookPage/>}/>
                        <Route exact path='/Login' element={<Login />} />
                        <Route exact path='/Register' element={<Register />} />
                        <Route exact path='/UnAuthorized' element={<Unauthorized />} />
                        <Route exact path='/Search' element={<Search />} />
                        <Route exact path='/AddAd' element={<Add />} />
                        <Route exact path='/Profile' element={<Profile />} />
                        <Route exact path='/Books' element={<BookList />} />
                        
                        <Route element={<RequireAuth allowedroles={['User']} />}>

                        </Route>
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>

    )
}

export default App