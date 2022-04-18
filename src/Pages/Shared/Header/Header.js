import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firabase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const [user] = useAuthState(auth);

    console.log(user);
    const handleGoogleSignOut = () => {
        signOut(auth);
    }
    return (
        <div class="container sticky-top">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
                <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img className="bi me-2" width="100" height="52" role="img" aria-label="Bootstrap" src={logo} alt="" />
                </Link>

                <ul className="nav nav-pills">
                    <li class="nav-item"><Link to="/home" class="nav-link">Home</Link></li>
                    <li class="nav-item"><Link to="/services" class="nav-link">Services</Link></li>
                    <li class="nav-item"><Link to="/inventory" class="nav-link">Inventory</Link></li>
                    <li class="nav-item"><Link to="/photos" class="nav-link">Photos</Link></li>
                    <li class="nav-item"><Link to="/blog" class="nav-link">Blog</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                    <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    {
                        user?.email ?
                            <div className="dropdown text-end">
                                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={user?.photoURL ? user.photoURL : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'} alt="mdo" width="42" height="42" className="rounded-circle" />
                                </a>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li className=''><a className="dropdown-item" href="#">{user?.displayName}</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>

                                    <li><button onClick={handleGoogleSignOut} className="dropdown-item" href="#">Sign out</button></li>
                                </ul>
                            </div> :
                            <div>
                                {/* <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-primary me-2">Login</button> */}
                                <Link to='/login' className="btn btn-outline-primary me-2">Login</Link>
                                <Link to='/signup' className="btn btn-primary">Sign-up</Link>
                            </div>
                    }

                </div>
            </header>
            {/* <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
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
            </header> */}
        </div>

    );
};

export default Header;