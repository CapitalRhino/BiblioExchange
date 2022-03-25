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
import OfferPage from './Offer/OfferPage';
import Privacy from './Privacy/Privacy';
import AboutUs from './AboutUs/AboutUs';
function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route element={<PersistLogin />}>
                        <Route index element={<Home />} />
                        <Route path='/Book/:id' element={<BookPage/>}/>
                        <Route path='/Offer/:id' element={<OfferPage/>}/>
                        <Route exact path='/Login' element={<Login />} />
                        <Route exact path='/Register' element={<Register />} />
                        <Route exact path='/UnAuthorized' element={<Unauthorized />} />
                        <Route exact path='/Search' element={<Search />} />
                       
                        <Route exact path='/Books' element={<BookList />} />
                        <Route exact path='/Privacy' element={<Privacy/>}/>
                        <Route exact path='/AboutUs'element={<AboutUs/>} />
                        <Route element={<RequireAuth allowedroles={['User']} />}>
 <Route exact path='/AddAd' element={<Add />} />
                        <Route exact path='/Profile' element={<Profile />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>

    )
}

export default App