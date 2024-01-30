import React from "react";
import {
    FaMapMarkerAlt,
    FaMobileAlt,
    FaRegClock,
    FaRegEnvelope,
} from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="contact" id="contact">
                <div className="main-title">
                    <h2>Get In Touch</h2>
                    <p>
                        Nullam hendrerit massa quis dui egestas, id scelerisque
                        felis rutrum. Etiam sem nibh, auctor sed, pharetra
                        congue.
                    </p>
                </div>
                <div className="container">
                    <div className="box">
                        <div className="line">
                            <div className="text">
                                <FaMapMarkerAlt className="i" />
                                <h2>Office Location</h2>
                            </div>

                            <address>
                                132 Dartmouth Street
                                <br />
                                Boston, Massachusetts 02156
                                <br />
                                United States
                            </address>
                        </div>

                        <div className="line">
                            <div className="text">
                                <FaMobileAlt className="i" />
                                <h2>Phone Number</h2>
                            </div>
                            <span className="number">+1 617 572 3012</span>
                        </div>

                        <div className="line">
                            <div className="text">
                                <FaRegEnvelope className="i" />
                                <h2>Email Address</h2>
                            </div>
                            <span className="link">email@sitename.com</span>
                        </div>

                        <div className="line">
                            <div className="text">
                                <FaRegClock className="i" />
                                <h2>Working Hours</h2>
                            </div>
                            <span className="time">09:00AM to 06:00PM</span>
                        </div>
                    </div>

                    <div className="field">
                        <form action="" method="POST">
                            <input
                                className="main-input"
                                type="text"
                                placeholder="Name"
                                required
                            />
                            <input
                                className="main-input"
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                className="main-input"
                                type="text"
                                placeholder="subject"
                                required
                            />
                            <textarea
                                name="Message"
                                className="main-input"
                                placeholder="Message"
                                required
                                defaultValue={""}
                            />
                            <input type="submit" defaultValue="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
