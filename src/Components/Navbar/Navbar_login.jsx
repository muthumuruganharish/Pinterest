import React from 'react'
import logo from "../../assets/pinterest-Logo.png"
import "./Navbar_login.css"

const Navbar_login = () => {
  return (
    <>

      <div className="navbar">



        <div className="nav-container">


          <div className="container1">

            <div className="navbar-img">
              <img src={logo} alt="hi" className='logo1' />

            </div>

            <div className="explore">
              <button>Explore</button>
            </div>

          </div>



          <div className="container2">


            <div className="section">
              <ul>
                <li>About</li>
                <li>Business</li>
                <li>create</li>
                <li>News</li>

              </ul>
            </div>


            <div className="buttons">


              <div className="login">

                <button>
                  login
                </button>

              </div>

              <div className="signup">
                <button>Signup</button>
              </div>

            </div>





          </div>



        </div>







      </div>


    </>
  )
}

export default Navbar_login
