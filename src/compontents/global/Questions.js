import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Questions = () => {
    return (
        <>
            <div className="questions" id="questions">
                <div className="main-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Cras fringilla, lectus sed ullamcorper fringilla. Massa
                        ex accumsan odio, quis iaculis justo magna quis tortor.
                    </p>
                </div>

                <div className="container">
                    <div className="content">
                        <div className="text">
                            <h3>
                                Can I see Naxos in action before purchasing it?
                            </h3>
                            <a>
                                <FaAngleDown className="i" />
                            </a>
                        </div>

                        <div className="angle">
                            <p>
                                Nam erat orci, dictum eu iaculis a, scelerisque
                                commodo risus. Mauris eu egestas ipsum. In hac
                                habitasse platea dictumst. Duis in consequat
                                est. Sed feugiat, ante in finibus ullamcorper,
                                felis sem porta orci, sed pretium nibh nunc a
                                tellus.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>
                                I’ve got older Mac. Is Naxos compatible with it?
                            </h3>
                            <a>
                                <FaAngleDown className="i" />
                            </a>
                        </div>
                        <div className="angle">
                            <p>
                                Nam erat orci, dictum eu iaculis a, scelerisque
                                commodo risus. Mauris eu egestas ipsum. In hac
                                habitasse platea dictumst. Duis in consequat
                                est. Sed feugiat, ante in finibus ullamcorper,
                                felis sem porta orci, sed pretium nibh nunc a
                                tellus.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>What are the requirements for using Naxos?</h3>
                            <a>
                                <FaAngleDown className="i" />
                            </a>
                        </div>
                        <div className="angle">
                            <p>
                                Nam erat orci, dictum eu iaculis a, scelerisque
                                commodo risus. Mauris eu egestas ipsum. In hac
                                habitasse platea dictumst. Duis in consequat
                                est. Sed feugiat, ante in finibus ullamcorper,
                                felis sem porta orci, sed pretium nibh nunc a
                                tellus.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>How does Naxos handle my privacy?</h3>
                            <a>
                                <FaAngleDown className="i" />
                            </a>
                        </div>
                        <div className="angle">
                            <p>
                                Nam erat orci, dictum eu iaculis a, scelerisque
                                commodo risus. Mauris eu egestas ipsum. In hac
                                habitasse platea dictumst. Duis in consequat
                                est. Sed feugiat, ante in finibus ullamcorper,
                                felis sem porta orci, sed pretium nibh nunc a
                                tellus.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>What is Naxos privacy policy?</h3>
                            <a>
                                <FaAngleDown className="i" />
                            </a>
                        </div>
                        <div className="angle">
                            <p>
                                Nam erat orci, dictum eu iaculis a, scelerisque
                                commodo risus. Mauris eu egestas ipsum. In hac
                                habitasse platea dictumst. Duis in consequat
                                est. Sed feugiat, ante in finibus ullamcorper,
                                felis sem porta orci, sed pretium nibh nunc a
                                tellus.
                            </p>
                        </div>
                    </div>
                    <p className="title">
                        Still have a question?
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="ask"
                        >
                            Ask your question here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Questions;
