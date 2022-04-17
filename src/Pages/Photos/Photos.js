import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Topbanar from '../Shared/TopBanar/Topbanar';
import Photo from './Photo/Photo';
import './Photos.css';

const Photos = () => {

    const path = window.location.pathname;
    const params = useParams();
    // console.log(params);
    const [photos, SetPhotos] = useState([]);
    useEffect(() => {
        fetch('photoInfo.json')
            .then(res => res.json())
            .then(data => SetPhotos(data))

    }, [photos]);

    console.log(params);
    return (
        <div>
            <Topbanar></Topbanar>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center my-2">
                        {/* <h3 className="py-3"><a href="https://spreeowl.com/">Spreeowl</a></h3> */}
                        <h4>Photos taken By Me</h4>
                    </div>
                </div>
                {
                    path === '/' ? "" : path === '/home' ? '' : <div className="portfolio-menu mt-2 mb-4">
                        <ul>
                            <li className="btn btn-outline-dark active" data-filter="*"><Link to='/photos'>All</Link></li>
                            <li className="btn btn-outline-dark" data-filter=".gts"><Link to='/photos/weeding'>Weeding</Link></li>
                            <li className="btn btn-outline-dark" data-filter=".lap"><Link to='/photos/tour'>Tour & Travels</Link></li>
                            <li className="btn btn-outline-dark" data-filter=".lap"><Link to='/photos/fashion'>Fashion</Link></li>
                            {/* <li className="btn btn-outline-dark text" data-filter=".selfie">Animals</li> */}
                        </ul>
                    </div>
                }

                <div className="portfolio-item row d-flex justify-content-center">
                    {
                        // photos?.filter(photo => path.includes(photo.category) ? <h1>hi</h1> : '')
                        photos?.map(photo => <Photo key={photo.id} photo={photo} ></Photo>)
                    }
                    {
                        path === '/photos' ? '' : photos.length > 8 ? (<Link to='/photos'><button type="button" className="btn btn-dark m-4 btn-show ">Show More</button></Link>) : ""
                    }

                </div>
            </div>
        </div>
    );
};

export default Photos;