import React from "react";
import "./Home.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

const Home = () => {
    const image = require("../images/about.webp");
    return (
        <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="row h-100">
                {/* Left Column (1/3 width) */}
                <div
                    className="col-lg-4 d-flex justify-content-center align-items-center flex-column"
                >
                    <h2 style={{ fontSize: "60px",textAlign: "center" }}>
                        BOOK CATALOGUE
                    </h2>
                    <h3 style={{ fontSize: "30px"}}>
                        FOR YOU
                    </h3>
                    <p className="mb-0" style={{color:"silver"}}>
                        Checkout Books From Here
                    </p>
                    <Link to="/Books" className="viewBook my-3">View Books</Link>
                </div>

                {/* Right Column (2/3 width) */}
                <div
                    className="col-lg-8 d-flex justify-content-center align-items-end flex-column"
                >
                    <img className="img-fluid homeimg" src={image} alt="Book Store" />
                </div>
            </div>
        </div>
    );
};

export default Home;