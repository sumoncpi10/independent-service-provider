import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <div class="container sticky-top">

            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img height={65} src={logo} alt="" srcset="" />
                </Link>

                <ul class="nav nav-pills">
                    <li class="nav-item"><Link to="/home" class="nav-link">Home</Link></li>
                    <li class="nav-item"><Link to="/services" class="nav-link">Services</Link></li>
                    <li class="nav-item"><Link to="/photos" class="nav-link">Photos</Link></li>
                    <li class="nav-item"><Link to="/blog" class="nav-link">Blog</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                    <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                </ul>
            </header>
        </div>

    );
};

export default Header;