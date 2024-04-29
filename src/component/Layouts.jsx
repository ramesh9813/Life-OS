import React from 'react'
 
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
// import PrimarySearchAppBar from './PrimarySearchAppBar'

const Layouts = () => {
  return (
    <>
    <Header/>
    {/* <PrimarySearchAppBar/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts