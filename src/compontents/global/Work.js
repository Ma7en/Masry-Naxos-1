import React from "react";
import { FaDatabase, FaMagic, FaPhone } from "react-icons/fa";

const Work = () => {
    return (
        <>
            <div className="work">
                <div className="main-title">
                    <h2>How It Works?</h2>
                    <p>
                        Sed laoreet diam sagittis tempus convallis. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
                <div className="container">
                    <div className="box">
                        <span>
                            <FaDatabase className="i" />
                        </span>
                        <h3>Your Data in Cloud</h3>
                        <p>
                            Lorem ipsum dolor sit amet, conseda adipiscing elit.
                            Aenean commodo ligula eget dolor massa.
                        </p>
                    </div>
                    <div className="box">
                        <span>
                            <FaPhone className="i" />
                        </span>
                        <h3>24/7 Support</h3>
                        <p>
                            Lorem ipsum dolor sit amet, conseda adipiscing elit.
                            Aenean commodo ligula eget dolor massa.
                        </p>
                    </div>
                    <div className="box">
                        <span>
                            <FaMagic className="i" />
                        </span>
                        <h3>Exclusive Design</h3>
                        <p>
                            Lorem ipsum dolor sit amet, conseda adipiscing elit.
                            Aenean commodo ligula eget dolor massa.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
