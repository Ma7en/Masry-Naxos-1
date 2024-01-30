import React from "react";

const Subscribe = () => {
    return (
        <>
            <div className="subscribe">
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <h2>Subscribe To Newsletter</h2>
                            <p>
                                Vivamus ornare feugiat orci eu faucibus.
                                Phasellus nulla arcu, pharetra nec laoreet in,
                                scelerisque a lectus.
                            </p>
                        </div>

                        <form action="" method="POST">
                            <input
                                className="input"
                                type="email"
                                placeholder="Enter Your Email"
                                required
                            />
                            <input
                                className="input"
                                type="submit"
                                defaultValue="Subscribe"
                            />
                        </form>

                        <p className="policy">
                            We don’t share your personal information with anyone
                            or company. Check out our
                            <span>{` Privacy Policy `}</span>for more information.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;
