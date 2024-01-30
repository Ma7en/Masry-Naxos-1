import React from "react";

// import screenshot1 from "../../images/portfolio/screenshot-1.jpeg";
// import screenshot2 from "../../images/portfolio/screenshot-2.jpeg";
// import screenshot3 from "../../images/portfolio/screenshot-3.jpeg";
// import screenshot4 from "../../images/portfolio/screenshot-4.jpeg";

const Portfolio = () => {
    return (
        <>
            <div className="portfolio" id="Portfolio">
                <div className="main-title">
                    <h2>App Screenshots</h2>
                    <p>
                        Morbi velit leo, sodales in purus eu, pretium accumsan
                        nunc. Praesent eu diam ut ante consequat euismod.
                    </p>
                </div>
                <div className="container">
                    <div className="image">
                        <img
                            src="images/portfolio/screenshot-1.jpeg"
                            alt="images/portfolio/screenshot-1.jpeg"
                        />
                        <img
                            src="images/portfolio/screenshot-2.jpeg"
                            alt="images/portfolio/screenshot-2.jpeg"
                        />
                        <img
                            src="images/portfolio/screenshot-3.jpeg"
                            alt="images/portfolio/screenshot-3.jpeg"
                        />
                        <img
                            src="images/portfolio/screenshot-4.jpeg"
                            alt="images/portfolio/screenshot-4.jpeg"
                        />
                    </div>

                    <ul className="bullets">
                        <li />
                        <li className="active" />
                        <li />
                        <li />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
