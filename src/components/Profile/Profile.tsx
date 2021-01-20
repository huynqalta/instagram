import React from 'react'
import "./Profile.scss"
import { FaRegSun, FaRegHeart, FaRegComment, FaCheck } from "react-icons/fa"
import { serialize } from 'v8'
const Profile = () => {
    return (
        <div className="Profile">
            <main>
                <section className="bio">
                    <div className="bio__img-block">
                        <a href=""><img className="bio__img" alt="" src="https://i.pinimg.com/564x/ac/47/f5/ac47f5b4fbfd53cb97e437ef7cf7141d.jpg" /></a>
                    </div>
                    <div className="bio__header">
                        <h1 className="bio__account">kimkardashian</h1>
                        <span className="bio__verified"
                        ><FaCheck className="fa fa-check" /></span>
                        <button className="bio__follow">Follow</button>
                    </div>
                    <div className="bio__stats">
                        <span className="bio__posts stats"><strong>5,097</strong> posts</span>
                        <span className="bio_followers stats"><strong>165m</strong> followers</span>
                        <span className="bio__following stats"><strong>37</strong> following</span>
                    </div>
                    <div className="bio_blurb">
                        <h2 className="bio__name">Kim Kardashian West</h2>
                        <p className="bio__description">
                            The <a href="">@SKIMS</a> Smooth Essentials collection is available
					now & Shop KKW x KRIS by <a href="">@kkwfragrance</a> on Wednesday,
					April 15th at 12PM PDT skims.com
				</p>
                    </div>
                </section>
                <nav>
                    <ul className="story">
                        <li>
                            <a href="">
                                <img
                                    src="https://i.pinimg.com/236x/59/ff/51/59ff51e62283d9e7b6429b451d48c85a.jpg"
                                    alt="story with bill murray"
                                />
                                <h2>KKW FRAGRANCE</h2>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="https://i.pinimg.com/236x/4d/e3/28/4de3281c277a1996915cc87df7153946.jpg"
                                    alt="story with slab of bacon"
                                />
                                <h2>SKIMS</h2>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="https://i.pinimg.com/236x/01/8c/a3/018ca32ed248b012f84e109a93484a26.jpg"
                                    alt="story with random photo"
                                />
                                <h2>KKW BEAUTY</h2>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="mobile-stats">
                        <li className="mobile-stats__posts stats">
                            <a href=""><strong>5,097</strong><br />posts</a>
                        </li>
                        <li className="mobile-stats_followers stats">
                            <a href=""><strong>165M</strong><br />followers</a>
                        </li>
                        <li className="mobile-stats__following stats">
                            <a href=""><strong>37</strong><br />following</a>
                        </li>
                    </ul>
                </nav>
                <section className="tabbed-pane">
                    <nav>
                        <ul className="tabbed-pane__header">
                            <li>
                                <a href="" className="tab-link selected"
                                ><i className="fa fa-table" aria-hidden="true"></i
                                ><span className="tab-link-text"> Posts</span></a
                                >
                            </li>
                            <li>
                                <a href="" className="tab-link"
                                ><i className="fa fa-television" aria-hidden="true"></i
                                ><span className="tab-link-text"> IGTV</span></a
                                >
                            </li>
                            <li>
                                <a href="" className="tab-link"
                                ><i className="fa fa-user" aria-hidden="true"></i
                                ><span className="tab-link-text"> Tagged</span></a
                                >
                            </li>
                        </ul>
                    </nav>
                </section>
            </main>
            <div className="loader"></div>
        </div>
    )
}

export default Profile
