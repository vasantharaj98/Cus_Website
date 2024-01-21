import React, { useEffect } from 'react'
import Header from '../src/layouts/header/Header.js';
import { Outlet } from 'react-router-dom';
import Footer from './layouts/footer/Footer.js';
const Layout = () => {

  return (
    <div>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout;