import React from "react";
import {
    FaHeadset,
    FaLock,
    FaRegCopyright,
    FaRegFile,
    FaShareAlt,
    FaStopwatch20,
} from "react-icons/fa";

// import awesomeFeatures from "../../images/features/awesome-features.png";

const Features = () => {
    return (
        <>
            <div className="features" id="features">
                <div className="main-title">
                    <h2>Awesome Features</h2>
                    <p>
                        Sed laoreet diam sagittis tempus convallis. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
                <div className="container">
                    <div className="feature-container">
                        <div className="col">
                            <div className="box">
                                <FaRegCopyright className="i" />
                                <div className="text">
                                    <h3>Custom Shortcuts</h3>
                                    <p>
                                        Semper a augue suscipit, luctus neque
                                        purus ipsum neque dolor primis libero
                                        tempus velna culpa expedita.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <FaLock className="i" />
                                <div className="text">
                                    <h3>Secure Integration</h3>
                                    <p>
                                        Semper a augue suscipit, luctus neque
                                        purus ipsum neque dolor primis libero
                                        tempus velna culpa expedita.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <FaHeadset className="i" />
                                <div className="text">
                                    <h3>Free Live Chat</h3>
                                    <p>
                                        Semper a augue suscipit, luctus neque
                                        purus ipsum neque dolor primis libero
                                        tempus velna culpa expedita.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img
                                    src="images/features/awesome-features.png"
                                    alt="images/features/awesome-features.png"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <FaShareAlt className="i" />
                                <div className="text">
                                    <h3>Social Share</h3>
                                    <p>
                                        Semper a augue suscipit, luctus neque
                                        purus ipsum neque dolor primis libero
                                        tempus velna culpa expedita.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <FaRegFile className="i" />
                                <div className="text">
                                    <h3>Merge Files</h3>
                                    <p>
                                        Semper a augue suscipit, luctus neque
                                        purus ipsum neque dolor primis libero
                                        tempus velna culpa expedita.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <FaStopwatch20 className="i" />
                                <div className="text">
                                    <h3>Action Reminder</h3>
                                    <p>
                                        Semper a augue suscipit, luctus neque
                                        purus ipsum neque dolor primis libero
                                        tempus velna culpa expedita.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
