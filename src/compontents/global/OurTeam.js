import React from "react";
import {
    FaDribbble,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

// import member1 from "../../images/ourteam/member-1.jpeg";
// import member2 from "../../images/ourteam/member-2.jpeg";
// import member3 from "../../images/ourteam/member-3.jpeg";
// import member4 from "../../images/ourteam/member-4.jpeg";

const OurTeam = () => {
    return (
        <>
            <div className="our-team">
                <div className="main-title">
                    <h2>Our Team</h2>
                    <p>
                        Aliquam at tortor sit amet eros bibendum faucibus quis
                        nec arcu. Quisque lobortis lectus vitae lectus aliquet
                        leo.
                    </p>
                </div>
                <div className="container">
                    <div className="box">
                        <div className="image">
                            <img
                                src="images/ourteam/member-1.jpeg"
                                alt="images/ourteam/member-1.jpeg"
                            />
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaTwitter className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaFacebookF className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaLinkedinIn className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaDribbble className="i" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text">
                            <p>Jeannette Crow</p>
                            <span>CEO Founder</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img
                                src="images/ourteam/member-2.jpeg"
                                alt="images/ourteam/member-2.jpeg"
                            />
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaTwitter className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaFacebookF className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaLinkedinIn className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaDribbble className="i" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text">
                            <p>Michael Broad</p>
                            <span>Web Designer</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img
                                src="images/ourteam/member-3.jpeg"
                                alt="images/ourteam/member-3.jpeg"
                            />
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaTwitter className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaFacebookF className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaLinkedinIn className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaDribbble className="i" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text">
                            <p>Isabella Dowson</p>
                            <span>Creative Director</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img
                                src="images/ourteam/member-4.jpeg"
                                alt="images/ourteam/member-4.jpeg"
                            />
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaTwitter className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaFacebookF className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaLinkedinIn className="i" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaDribbble className="i" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text">
                            <p>Martin Lawrence</p>
                            <span>App Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;
