import  Navbar  from './Navbar'
import React, { Children } from 'react'
import Footer from './Footer'
export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
