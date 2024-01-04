import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <Footer/>

    </div>
  )
}
