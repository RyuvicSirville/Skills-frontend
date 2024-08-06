import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from '../assets/images/signinlogo.png';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div id="signin" className="flex justify-center">
            <div id="signintext">
                <div id="signintextcontainer" style={{ padding: '0px 16px 10px 16px' }}>
                    <div id="signintextheading">
                        <span id="sub-heading" className="sub-heading">Welcome back!!</span>
                        <span id="heading" className="heading">LOG IN</span>
                    </div>
                    <div>
                        <span className="text-sm">Haven't registered yet? <Link to='/register' className="font-semibold" style={{ color: '#9A8DEC' }}>Register</Link></span>
                    </div>
                </div>
                <div className="lg:hidden">
                    <img src={logo} alt="logo" />
                </div>
                <div id="signininput">
                    <div>
                        <input type="email" placeholder="E - mail" required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            style={{ paddingRight: '40px' }}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            style={{ width: '16px', height: '16px', padding: '3.33px 1.33px', gap: '0px' }}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div id="forgotpassworddiv" className="text-right">
                        <Link to='#' className="cursor-help" style={{ color: '#9A8DEC' }}>Forgot Password ?</Link>
                    </div>
                    <div className="text-right text-white font-semibold" id="help">Kindly visit Zairza</div>
                </div>
                <div className="flex lg:justify-end justify-between gap-4 mt-8">
                    <Link to='/' className="flex items-center h-7 no-underline text-white border-white rounded border pl-4 pr-4 justify-center gap-1" style={{ width: '90px', fontSize: '12px', fontWeight: '550' }}>
                        <GoArrowLeft />Back
                    </Link>
                    <Link className="flex items-center h-7 bg-white no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1" style={{ color: '#303030', border: '#303030', width: '90px', fontSize: '12px', fontWeight: '550' }}
                        onClick={() => {
                            function callback2(data) {
                                localStorage.setItem("token", data.token);
                                console.log(localStorage.getItem("token"))
                                let x = localStorage.getItem("token")
                                if (x !== "undefined") {
                                    navigate1()
                                }
                                else {
                                    alert("Autherisation Failed!")
                                }
                                function navigate1() {
                                    window.location="/"
                                }

                            }
                            function callback1(res) {
                                res.json().then(callback2)
                            }
                            fetch("http://localhost:3001/user/login  ", {
                                method: "POST",
                                body: JSON.stringify({
                                    email: email,
                                    password: password
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            })
                                .then(callback1)
                        }}
                    >
                        Log In<GoArrowRight />
                    </Link>
                </div>
            </div>
            <div><img src={logo} alt='logo' id="signinlogo" /></div>
        </div>
    );
}

export default SignIn;
