import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faGear} from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus,faBell,faCommentDots,faCompass } from '@fortawesome/free-regular-svg-icons';
import './Sidebar.css'
import logo from "../../assets/logo.png";


function Sidebar() {
    
    return (
        <div className="sidebar">

            <div className="top">
                <div className="logo">  
                         <img src={logo} alt="logo" />
                </div>

                <div className="home">
                    <a href="#"><FontAwesomeIcon icon={faHouse} /></a>
                    
                </div>
                <div className="compass">
                    <a href="#"><FontAwesomeIcon icon={faCompass} /></a>
                    
                </div>
                <div className="post">
                    <a href="#"><FontAwesomeIcon icon={faSquarePlus} /></a>
                    

                </div>
                <div className="bell">
                    <a href="#"><FontAwesomeIcon icon={faBell} /></a>
                    
                </div>
                <div className="message">
                    <a href="#"><FontAwesomeIcon icon={faCommentDots} /></a>
                    
                </div>

            </div>

            <div className="bottom">
                <div className="setting">
                    <a href="#"><FontAwesomeIcon icon={faGear} /></a>
                    
                </div>
            </div>

        </div>
    );
}

export default Sidebar;

