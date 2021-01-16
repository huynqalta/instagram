import React, { useState } from 'react'
import "./navbar.css"
import {
    FaSearch,
    FaTelegramPlane,
    FaRegCompass,
    FaRegHeart
} from "react-icons/fa"
import { MdHome } from "react-icons/md"
import Model from './model/Model'

const Navbar = () => {
    const [ visible, setVisible ] = useState(true);

    const onpenForm = () => {

    }
    return (
        <div className="navbar">
            <div className="navbar__first">
                <div className="navbar__first-logo">
                    <img src="/images/logo_header.png" alt="header" />

                </div>
            </div>
            <div className="navbar__middle">
                <div className="navbar__middle-search">
                    <FaSearch className="searchIcon" />
                    <input type="text" className="nav__search" placeholder="Search" />
                </div>
            </div>
            <div className="navbar__last">
                <li>
                    <MdHome className="navbar__icons" />
                </li>
                <li>
                    <FaTelegramPlane className="navbar__icons" />
                </li>
                <li>
                    <FaRegCompass className="navbar__icons" />
                </li>
                <li>
                    <FaRegHeart className="navbar__icons" />
                </li>
                <li onClick={onpenForm}>Register/Login</li>
            </div>
            {
                visible && <Model />
            }

        </div>
    )
}

export default Navbar
