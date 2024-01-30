import React from "react";
import { FaCheck, FaGg, FaLink, FaRegCompass } from "react-icons/fa";

// import trackTime from "../../images/tracking/track-time.png";
// import videoWelcome from "../../images/tracking/video-welcome.png";

const Tracking = () => {
    return (
        <>
            <div className="tracking">
                <div className="container">
                    <div className="track-content">
                        <img
                            src="images/tracking/track-time.png"
                            alt="images/tracking/track-time.png"
                        />
                        <div className="time">
                            <div className="heading">
                                <h2>Track Time From Anywhere</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                            <div className="box">
                                <div className="srv-box">
                                    <span>
                                        <FaRegCompass className="i" />
                                    </span>
                                    <div className="text">
                                        <h3>Easy to Use</h3>
                                        <p>
                                            Cum sociis natoque penatibus et
                                            magnis dis parturient montes,
                                            nascetur
                                        </p>
                                    </div>
                                </div>
                                <div className="srv-box">
                                    <span>
                                        <FaGg className="i" />
                                    </span>
                                    <div className="text">
                                        <h3>Monitor &amp; Manage</h3>
                                        <p>
                                            Cum sociis natoque penatibus et
                                            magnis dis parturient montes,
                                            nascetur
                                        </p>
                                    </div>
                                </div>
                                <div className="srv-box">
                                    <span>
                                        <FaLink className="i" />
                                    </span>
                                    <div className="text">
                                        <h3>Stay Connected</h3>
                                        <p>
                                            Cum sociis natoque penatibus et
                                            magnis dis parturient montes,
                                            nascetur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="daily-schdule">
                        <div className="built">
                            <div className="heading">
                                <h2>Built For Your Daily Schedule</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </p>
                            </div>
                            <ul>
                                <li>
                                    <FaCheck className="i" />
                                    Ut fringilla est at nunc suscipit dictum.
                                    Nulla facilisi. Phasellus dignissim nibh
                                    eget imperdiet venenatis.
                                </li>

                                <li>
                                    <FaCheck className="i" />
                                    Nullam egestas tincidunt lectus, sagittis
                                    eros vestibulum in. Vestibulum finibus
                                    iaculis sagittis. Suspendisse viverra
                                    luctus.
                                </li>

                                <li>
                                    <FaCheck className="i" />
                                    Suspendisse at volutpat magna, vitae mattis
                                    metus. Integer posuere eu erat at pharetra.
                                    Aliquam ut pharetra diam.
                                </li>

                                <li>
                                    <FaCheck className="i" />
                                    Donec luctus, sem vel molestie efficitur,
                                    metus libero mollis neque, sed scelerisque
                                    arcu nisl eu lectus.
                                </li>

                                <li>
                                    <FaCheck className="i" />
                                    Fusce neque magna, fringilla ac vulputate
                                    at, venenatis a eros. Donec accumsan commodo
                                    tortor sed fringilla.
                                </li>
                            </ul>
                            <a href="#">Learn More</a>
                        </div>
                        <img
                            src="images/tracking/video-welcome.png"
                            alt="images/tracking/video-welcome.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tracking;
