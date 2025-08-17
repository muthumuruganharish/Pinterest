import React from 'react'

import Login_img from "../../assets/image.png"
import "./Login_container.css"

const Login_container = () => {
    return (
        <>

            <div className="main-div">


                

                    <img src={Login_img} alt="" />


               


                <div className="login-div">


                    <div className="login-div2">


                        <div className="text">

                            <h1>Welcome To <br /> pinterest</h1>

                        </div>


                        <div className="inputs">

                            <label>Email</label>
                            <br />
                            <input type="email" placeholder='Email' />

                            <br />


                            <label>Password</label>
                            <br />
                            <input type="password" placeholder='Password' />


                        </div>



                        <div className="forgot">

                           <p>Forgot password</p>


                        </div>


                        <div className="login_button">

                            <button>Login</button>


                        </div>








                    </div>
















                </div>







            </div>




        </>
    )
}

export default Login_container
