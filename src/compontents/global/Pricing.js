import React from "react";
import { FaAppStore, FaBuffer, FaRegHeart } from "react-icons/fa";

const Pricing = () => {
    return (
        <>
            <div className="pricing" id="pricing">
                <div className="main-title">
                    <h2>Pricing Plans</h2>
                    <p>
                        Morbi nec massa ac ligula pulvinar congue. Nunc ut
                        sollicitudin nibh. Etiam sem nibh, auctor sed, pharetra
                        congue.
                    </p>
                </div>
                <div className="container">
                    <div className="plans">
                        <div className="plan">
                            <div className="head">
                                <FaBuffer className="i" />
                                <h2>Standard</h2>
                                <span className="date">$29/month</span>
                            </div>
                            <ul>
                                <li>50 GB Disk Space</li>
                                <li>Unlimited Bandwidth</li>
                                <li>5 MySQL Database</li>
                                <li>3 FTP Users</li>
                                <li>Free Domain</li>
                            </ul>
                            <a href="#">Purchase</a>
                        </div>
                        <div className="plan popular">
                            <div className="card">
                                <span className="pop">Popular</span>
                            </div>
                            <div className="head">
                                <FaRegHeart className="i" />
                                <h2>Professional</h2>
                                <span className="date">$29/month</span>
                            </div>
                            <ul>
                                <li>50 GB Disk Space</li>
                                <li>Unlimited Bandwidth</li>
                                <li>5 MySQL Database</li>
                                <li>3 FTP Users</li>
                                <li>Free Domain</li>
                            </ul>
                            <a href="#">Purchase</a>
                        </div>
                        <div className="plan">
                            <div className="head">
                                <FaAppStore className="i" />
                                <h2>Business</h2>
                                <span className="date">$29/month</span>
                            </div>
                            <ul>
                                <li>50 GB Disk Space</li>
                                <li>Unlimited Bandwidth</li>
                                <li>5 MySQL Database</li>
                                <li>3 FTP Users</li>
                                <li>Free Domain</li>
                            </ul>
                            <a href="#">Purchase</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
