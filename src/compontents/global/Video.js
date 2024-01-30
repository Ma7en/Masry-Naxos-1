import React from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
    return (
        <>
            <div className="video">
                <div className="container">
                    <div className="box">
                        <a>
                            <FaPlay className="i" />
                        </a>
                        <h2>Watch This Video</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Video;
