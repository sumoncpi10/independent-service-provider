import React from 'react';
import Topbanar from '../Shared/TopBanar/Topbanar';
import './Services.css';
const Services = () => {
    return (
        <div>
            <Topbanar></Topbanar>
            <h1 className='mt-5'>Choose a plan</h1>
            <div className='container p-5'>
                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://img.freepik.com/free-photo/wedding-couple-best-friends-are-drinking-champagne-celebrating-park-wedding-day_8353-11143.jpg?t=st=1650202682~exp=1650203282~hmac=629acc323829a8d685366d7902ad6c82fe0322e9f927636ebaa2da20d80924f7&w=1380" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Weeding Photography</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <ul>
                                <li>2 TB of space</li>
                                <li>unlimited bandwidth</li>
                                <li>full backup systems</li>
                                <li>free domain</li>
                                <li>unlimited database</li>
                            </ul>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fashion Photography</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <ul>
                                <li>2 TB of space</li>
                                <li>unlimited bandwidth</li>
                                <li>full backup systems</li>
                                <li>free domain</li>
                                <li>unlimited database</li>
                            </ul>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://img.freepik.com/free-photo/couple-family-traveling-together_1150-7772.jpg?t=st=1650202917~exp=1650203517~hmac=d0fbda8d3086d8421232ca2396636d6752c4c92493b5836843fe1b6d97339ab6&w=1380" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tour & travels Photography</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. .</p>
                            </div>
                            <ul>
                                <li>2 TB of space</li>
                                <li>unlimited bandwidth</li>
                                <li>full backup systems</li>
                                <li>free domain</li>
                                <li>unlimited database</li>
                            </ul>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;