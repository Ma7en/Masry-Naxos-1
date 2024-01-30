import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

// import singleWelcome from "../../images/landing/single-welcome.png";

const Landing = () => {
    return (
        <>
            <div className="landing">
                <div className="container">
                    <div className="content">
                        <h2>
                            Showcase your
                            <br />
                            App in one place
                        </h2>
                        <p>
                            Duis facilisis sem sed metus malesuada rhoncus.
                            Nulla tincidunt tincidunt lectus at lacinia.
                            Pellentesque ullamcorper arcu id rutrum volutpat.
                            Donec suscipit auctor enim vel dignissim.
                        </p>
                        <div className="buttons">
                            <div className="play">
                                <FaGooglePlay className="i" />
                                <div className="box">
                                    <span>Available On</span>
                                    <span>Google Play</span>
                                </div>
                            </div>
                            <div className="store">
                                <FaApple className="i" />
                                <div className="box">
                                    <span>Download On</span>
                                    <span>App Store</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        {/* <img src={singleWelcome} alt={singleWelcome} /> */}
                        <img
                            src="images/landing/single-welcome.png"
                            alt="images/landing/single-welcome.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
