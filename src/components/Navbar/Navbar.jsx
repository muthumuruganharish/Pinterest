import React, { useState, useRef, useEffect } from 'react'
import "./Navbar.css";
import profile from "../../assets/profile.png";
import dropdown from "../../assets/down-chevron.png";
import 'font-awesome/css/font-awesome.min.css';
import meme2 from "../../assets/meme2.jpeg";




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


{/*----------------------------Suggestion imges------------------------------------------------------*/ }
                    {display &&

                        <div>

                            <div className="suggestion-img">

                                <div className="img1">

                                    <img src={meme2} alt="no" className='meme2' /> <span>Meme</span>

                                </div>




                            </div>


                        </div>
                    }





                </div>



    {/*------------------------------Acounts------------------------------------------------ */}            

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