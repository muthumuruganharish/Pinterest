import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import "../Styles/Home.css"

const Home = () => {
  return (
    <>
      <div className="main">
          <Sidebar/>

        <div className="two">
          <div className="nav">
              <Navbar/>
          </div>
          <div className="content">
            asd
          </div>
              
        </div>
      </div>
      
      
    </>
  )
}

export default Home
