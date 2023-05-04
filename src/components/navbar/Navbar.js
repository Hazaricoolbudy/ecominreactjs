import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand fs-bold fs-4" href="/">ReuxStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>



                        </ul>
                        <div className="buttons">
                            <Link to="/signin" className="btn btn-outline-dark mx-2"> <i class="fa-sharp fa-solid fa-right-to-bracket"></i>Login</Link>
                            <Link to="/register" className="btn btn-outline-dark mx-2"> <i class="fa-solid fa-user-plus"></i>Register</Link>
                            <Link to="/cart" className="btn btn-outline-dark mx-2"> <i class="fa-solid fa-cart-shopping"></i> (0)</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
