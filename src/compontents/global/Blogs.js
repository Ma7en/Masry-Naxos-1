import React from "react";

// import post1 from "../../images/blogs/post-1.jpeg";
// import post2 from "../../images/blogs/post-2.jpeg";
// import post3 from "../../images/blogs/post-3.jpeg";

const Blogs = () => {
    return (
        <>
            <div className="blogs" id="blog">
                <div className="main-title">
                    <h2>Latest Blog Posts</h2>
                    <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere ipsum dolor sit amet, consectetur elit
                        .
                    </p>
                </div>
                <div className="container">
                    <div className="srv-box">
                        <div className="image">
                            <img
                                src="images/blogs/post-1.jpeg"
                                alt="images/blogs/post-1.jpeg"
                            />
                            <div className="description">
                                <button>Photography</button>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#" className="date">
                                AthenaStudio <span>. January 14, 2022</span>
                            </a>
                            <div className="text">
                                <h2>
                                    Assorted Color Buildings and Sea in
                                    Riomaggiore
                                </h2>
                                <p>
                                    Quisque dui at erat auctor pulvinar nisl
                                    felis, gravida et aliquam vitae, aliquet
                                    quis nibh
                                </p>
                            </div>
                            <a className="read" href="#">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="srv-box">
                        <div className="image">
                            <img
                                src="images/blogs/post-2.jpeg"
                                alt="images/blogs/post-2.jpeg"
                            />
                            <div className="description">
                                <button>LifeStyle</button>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#" className="date">
                                AthenaStudio <span>. December 30, 2021</span>
                            </a>
                            <div className="text">
                                <h2>
                                    Aerial Photography of Snowy Mountain Ranges
                                </h2>
                                <p>
                                    Quisque dui at erat auctor pulvinar nisl
                                    felis, gravida et aliquam vitae, aliquet
                                    quis nibh
                                </p>
                            </div>
                            <a className="read" href="#">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="srv-box">
                        <div className="image">
                            <img
                                src="images/blogs/post-3.jpeg"
                                alt="images/blogs/post-3.jpeg"
                            />
                            <div className="description">
                                <button>Development</button>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#" className="date">
                                AthenaStudio <span>. July 12, 2021</span>
                            </a>
                            <div className="text">
                                <h2>Forest Highway With Green Leaves</h2>
                                <p>
                                    Quisque dui at erat auctor pulvinar nisl
                                    felis, gravida et aliquam vitae, aliquet
                                    quis nibh
                                </p>
                            </div>
                            <a className="read" href="#">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
