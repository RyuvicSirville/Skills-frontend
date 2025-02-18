import React from "react";
import { Link } from "react-router-dom";
import footerlogo from '../assets/images/footerlogo.png'

const Footer = () => {
    return(
        <div id="footer" className="flex justify-between flex-wrap gap-16 items-center" >
            <div id="footer-left" className="flex gap-3 items-center flex-wrap">
                <Link to="https://www.zairza.co.in/">
                <img src={footerlogo} className="w-11" alt="navbarlogo" />
                </Link>
                <div id="footer-text" className="text-justify">A event organised by Zairza for the welfare of budding talented software engineers, hardware engineers and designers
                </div>
            </div>
            <div id="footer-right">
                <ul className="flex gap-6 pl-0">
                    <li>
                        <Link to='#' className="text-white" >Youtube</Link>
                    </li>
                    <li>
                        <Link to='#' className="text-white" >Instagram</Link>
                    </li>
                    <li>
                        <Link to='#' className="text-white" >Linkedin</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer