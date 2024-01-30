import React from "react";
import {
    FaDolly,
    FaRegArrowAltCircleDown,
    FaRegStar,
    FaUserAlt,
} from "react-icons/fa";

const Static = () => {
    return (
        <>
            <div className="static">
                <div className="container">
                    <div className="box">
                        <FaRegArrowAltCircleDown className="i" />
                        <div className="number">2067</div>
                        <p>Total Downloads</p>
                    </div>
                    <div className="box">
                        <FaDolly className="i" />
                        <div className="number">982</div>
                        <p>Happy Clients</p>
                    </div>
                    <div className="box">
                        <FaUserAlt className="i" />
                        <div className="number">890</div>
                        <p>Active Users</p>
                    </div>
                    <div className="box">
                        <FaRegStar className="i" />
                        <div className="number">537</div>
                        <p>App Rates</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Static;
