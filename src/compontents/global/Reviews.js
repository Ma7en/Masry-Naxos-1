import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// import client1 from "../../images/reviews/client-1.jpeg";
// import client2 from "../../images/reviews/client-2.jpeg";
// import client3 from "../../images/reviews/client-3.jpeg";
// import client4 from "../../images/reviews/client-4.jpeg";
// import client5 from "../../images/reviews/client-5.jpeg";

const Reviews = () => {
    return (
        <>
            <div className="reviews">
                <div className="main-title">
                    <h2>Client Reviews</h2>
                    <p>
                        Sed laoreet diam sagittis tempus convallis. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>

                <div className="container">
                    <p>
                        <span>
                            <FaQuoteLeft />
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident nulla ipsa accusamus laborum tenetur ad ab
                        obcaecati sit atque beatae.
                        <span>
                            <FaQuoteRight />
                        </span>
                    </p>

                    <div className="box">
                        <div className="image">
                            <img
                                src="images/reviews/client-1.jpeg"
                                alt="images/reviews/client-1.jpeg"
                            />
                        </div>

                        <div className="image">
                            <img
                                src="images/reviews/client-2.jpeg"
                                alt="images/reviews/client-2.jpeg"
                            />
                        </div>

                        <div className="image">
                            <img
                                className="active"
                                src="images/reviews/client-3.jpeg"
                                alt="images/reviews/client-3.jpeg"
                            />
                        </div>

                        <div className="image">
                            <img
                                src="images/reviews/client-4.jpeg"
                                alt="images/reviews/client-4.jpeg"
                            />
                        </div>

                        <div className="image">
                            <img
                                src="images/reviews/client-5.jpeg"
                                alt="images/reviews/client-5.jpeg"
                            />
                        </div>
                    </div>

                    <div className="details">
                        <span className="name">Anthony Lee </span>
                        <span className="job">From Initech</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
