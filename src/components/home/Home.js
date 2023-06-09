import React from "react";
import bg from '../../assest/bg.jpg'

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-black border-0">
                <img src={bg} className="card-img" alt="..." height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 mb-0 fw-bolder">New Season Arrival</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
