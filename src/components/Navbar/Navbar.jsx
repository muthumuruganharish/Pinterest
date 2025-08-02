import React from 'react'
import "./Navbar.css";
import profile from "../../assets/profile.png";
import dropdown from "../../assets/down-chevron.png";
import 'font-awesome/css/font-awesome.min.css';



const Navbar = () => {
    return (
        <>
            <div className="navbar">

                <div className="search-container">
                   

                    <input type="text" placeholder="🔍︎ Search..." className='search'
                   
                   onFocus={(e)=>{
                        e.target.placeholder = "Search...";
                    }}

                    onBlur={(e)=>{
                        
                        e.target.placeholder="🔍︎ Search..."
                    }}
                    
                    />

                    <button className="search-button">
                        →

                    </button>

                </div>

                <div className="accounts">

                    <div className="profile-container">
                        <div className="img-wrapper">
                        <img src={profile} alt="" className='profile-img' />

                        <span className='profile-name'>Profile</span>
                        </div>

                    </div>

                    <div className="dropdown">

                        <div className="img-wrapper">

                             <img src={dropdown} alt="" className='dropdown-img' />
                              <span className='profile-name'>Accounts</span>

                        </div>
                       

                    </div>


                </div>

            </div>




        </>
    )
}

export default Navbar
