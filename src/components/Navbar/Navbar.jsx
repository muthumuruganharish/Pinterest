import React from 'react'
import "./Navbar.css";
import profile from "../../assets/profile.png";
import dropdown from "../../assets/down-chevron.png";

const Navbar = () => {
    return (
        <>
            <div className="navbar">

                <div className="search-container">

                    <input type="text" placeholder="Search..." className='search' />

                    <button className="search-button">
                        →
                    </button>

                </div>

                <div className="accounts">

                    <div className="profile-container">
                        <img src={profile} alt="" className='profile-img' />

                    </div>

                    <div className="dropdown">
                        <img src={dropdown} alt="" className='dropdown-img' />

                    </div>


                </div>

            </div>


        </>
    )
}

export default Navbar
