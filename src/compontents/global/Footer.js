import React from "react";
import { Link } from "react-scroll";
import { FaApple, FaGooglePlay } from "react-icons/fa";

// import logoWhite from "../../images/footer/logo-white.png";

const Footer = () => {
    const newDate = new Date();

    return (
        <>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <div className="col">
                        <div className="logo">
                            <img
                                src="images/footer/logo-white.png"
                                alt="images/footer/logo-white.png"
                            />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quis non, fugit totam vel laboriosam vitae.
                        </p>
                        <ul className="social">
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-dribbble" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-pinterest" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Useful Links</h2>
                        <ul className="links">
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="#">Affiliate Program</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Product Help</h2>
                        <ul className="links">
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Reviews</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Feedback</a>
                            </li>
                            <li>
                                <a href="#">API</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Download</h2>
                        <div className="app">
                            <FaGooglePlay className="i" />
                            <div className="info">
                                <span>Available On</span>
                                <span>Google Play</span>
                            </div>
                        </div>
                        <div className="app">
                            <FaApple className="i" />
                            <div className="info">
                                <span>Download On</span>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p className="copyright">
                        <span>Copyright ©</span>
                        <span className="dateYear">
                            {` ${newDate.getFullYear()} `}
                        </span>
                        <Link
                            to="landing"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {" Mazen Saad "}
                        </Link>
                        <span>All Rights Reserved.</span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
