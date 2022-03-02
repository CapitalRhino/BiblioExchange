import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout() {
  return (
    <>
        <Header/>
        <main className='App'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout