import React, { useState, useRef, useEffect } from 'react'
import "./Navbar.css";
import profile from "../../assets/profile.png";
import dropdown from "../../assets/down-chevron.png";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";


import meme2 from "../../assets/meme2.jpeg";
import qoute from "../../assets/qoute.jpeg"
import profile2 from "../../assets/profile.jpeg"
import wallpaper from "../../assets/wallpaper.jpeg"
import aesthetic from "../../assets/aesthetic.jpeg"
import movie from "../../assets/movie.jpeg"




const Navbar = () => {

    const [display, setDisplay] = useState(false)//(2) at default it is false

    const ref1 = useRef(null)  //(3)here we assign use ref default value null 

    useEffect(() => {

        const click = (e) => {

            if (ref1.current && !ref1.current.contains(e.target)) { //(4)here ref1.current will return whole search-container div 
                //ref1.current.contains(e.target) means when we click the searchbar it becomes true
                //!ref1.current.contains(e.target) means when we not or we click outside the searchbox means it return
                //here when we click outside the search bar means it will set display to false
                setDisplay(false)

            }

        }

        document.addEventListener("mousedown", click) //(6) we use addEventListener because whenever the mouse click happens outside the searchbar it will call the click function

        return () => {

            document.removeEventListener("mousedown", click)//(7)to cleanup the useEffect we use the return statement

        }

    }, []

    )



    return (
        <>
            <div className="navbar">

                <div className="common-div">

                    {/*-----------------------------Search div-----------------------------------------------------   */}

                    <div className="search-div">

                        <div className="search-container" ref={ref1}>


                            <input type="text" placeholder="🔍︎ Search..." className='search' onClick={() => setDisplay(true)} //(1) when the search bar is clicked the useState becomes true

                                onFocus={(e) => {
                                    e.target.placeholder = "Search...";
                                }}

                                onBlur={(e) => {

                                    e.target.placeholder = "🔍︎ Search..."
                                }}

                            />

                            <button className="search-button">
                                →

                            </button>



                        </div>







                    </div>



                    {/*------------------------------Acounts------------------------------------------------ */}

                    <div className="accounts">

                        <div className="profile-container">
                            <div className="img-wrapper">
                                <Link to="/Login" >  
                                <img src={profile} alt="" className='profile-img' />
                               
                                    </Link>
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




             {/*----------------------------Suggestion imges------------------------------------------------------*/}

                <div className="sug-div">
                    {display &&

                        <div>

                            <div className="suggestion-img">

                                {/*---------------- suggestion container1----------------  */}
                                <div className="suggestion-container">


                                    <div className="suggestion-heading">

                                        <h2>Recent searches</h2>

                                    </div>


                                    <div className="img-container">


                                        <div className="img1">


                                            <div className="img-meme2"><img src={meme2} alt="no" className='meme2' /> </div>

                                            <div className="img-name"><h3>Memes</h3></div>


                                        </div>

                                        <div className="img2">



                                            <div className="img-qoute">

                                                <img src={qoute} alt="" className='qoute' />


                                            </div>

                                            <div className="img-name">

                                                <h3>Quotes</h3>

                                            </div>


                                        </div>



                                        <div className="img3">


                                            <div className="img-profile2"><img src={profile2} alt="no" className='profile2' /> </div>

                                            <div className="img-name"><h3>Profile pics</h3></div>


                                        </div>



                                    </div>

                                </div>


                                {/*---------------- suggestion container2---------------  */}
                                <div className="suggestion-container2">


                                    <div className="suggestion-heading">

                                        <h2>Popular on pinterest</h2>

                                    </div>


                                    <div className="img-container">


                                        <div className="img1">


                                            <div className="img-meme2"><img src={wallpaper} alt="no" className='meme2' /> </div>

                                            <div className="img-name"><h3>Wallpapers</h3></div>


                                        </div>

                                        <div className="img2">



                                            <div className="img-qoute">

                                                <img src={aesthetic} alt="" className='qoute' />


                                            </div>

                                            <div className="img-name">

                                                <h3>aesthetic pics</h3>

                                            </div>


                                        </div>



                                        <div className="img3">


                                            <div className="img-profile2"><img src={movie} alt="no" className='profile2' /> </div>

                                            <div className="img-name"><h3>movie pics</h3></div>


                                        </div>



                                    </div>










                                </div>




                            </div>


                        </div>
                    }

                </div>


            </div>


        





        </>
    )
}

export default Navbar