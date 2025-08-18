import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import "../Styles/Home.css"

import img1 from "../assets/img/1.jpeg";
import img2 from "../assets/img/2.jpeg";
import img3 from "../assets/img/3.jpeg";
import img4 from "../assets/img/4.jpeg";
import img5 from "../assets/img/5.jpeg";
import img6 from "../assets/img/6.jpeg";
import img7 from "../assets/img/7.jpeg";
const images = [img7,img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6];

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="one">
          <Sidebar />
        </div>
        

        <div className="two">
          <div className="nav">
            <Navbar />
          </div>
          <div className="content">

               <div className="pinterest-grid">
                  {images.map((src, index) => (
                    <div key={index} className="pinterest-item">
                      <img src={src} alt={`post-${index}`} loading="lazy" />
                    </div>
                  ))}
              </div>

          </div>

        </div>
      </div>


    </>
  )
}

export default Home
