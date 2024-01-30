import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

// import logoWhite from "../../images/header/logo-white.png";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <>
            <header className={sticky ? "header open" : "header"}>
                <div className="container">
                    <a href="#" className="logo">
                        {/* <img src={logoWhite} alt={logoWhite} /> */}
                        <img
                            src="images/header/logo-white.png"
                            alt="images/header/logo-white.png"
                        />
                    </a>

                    <nav>
                        {navbar ? (
                            <FaTimes
                                id="toggle-menu"
                                className="fa-times"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            />
                        ) : (
                            <FaBars
                                id="toggle-menu"
                                className="fa"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            />
                        )}

                        <ul className={navbar ? "navbar open" : "navbar"}>
                            <li>
                                <Link
                                    to="landing"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="features"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Portfolio
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="questions"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Support
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="blogs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Blogs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="pricing"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="form" style={{ display: "none" }}>
                            <i className="fas fa-search" />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
