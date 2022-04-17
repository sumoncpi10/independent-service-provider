import React from 'react';
import { Link } from 'react-router-dom';
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
                                <h4 className='m-3'>TK.12,500/=</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            </div>
                            <ul class="list-style-11" >
                                <li>1 <strong>Top</strong> Photographer</li>
                                <li>Event Duration:<strong> 4 Hours</strong></li>
                                <li>Number of Pictures: Unlimited (All post processed)</li>
                                <li>Specially Edited Photos: 100 copies</li>
                                <li>Print: 4R (4”x6″) Matte Prints: 100 copies</li>
                                <li>* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive</li>
                            </ul>
                            <Link to='/inventory'><button type="button" className="btn btn-dark m-4 btn-show ">Checkout</button></Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fashion Photography</h5>
                                <h4 className='m-3'>TK.20,500/=</h4>
                                {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
                            </div>
                            <ul class="list-style-11" >
                                <li>1 <strong>Senior</strong> Photographer + 1 Top Associate Photographer.</li>
                                <li>Event Duration:<strong> 3 Hours</strong></li>
                                <li>Number of Pictures: Unlimited (All post processed)</li>
                                <li>Specially Edited Photos: 100 copies</li>
                                <li>Print: 12L (12”x 18″) Matte Print: 1 copy</li>
                                <li>Print: 5L (5”x7.5″) Matte Prints: 100 copies</li>
                                <li>* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive</li>
                            </ul>
                            <Link to='/inventory'><button type="button" className="btn btn-dark m-4 btn-show ">Checkout</button></Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://img.freepik.com/free-photo/couple-family-traveling-together_1150-7772.jpg?t=st=1650202917~exp=1650203517~hmac=d0fbda8d3086d8421232ca2396636d6752c4c92493b5836843fe1b6d97339ab6&w=1380" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tour & travels Photography</h5>
                                <h4 className='m-3'>TK.15,050/=</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. .</p> */}
                            </div>
                            <ul class="list-style-11" >
                                <li>1 <strong>Top</strong> Photographer</li>
                                <li>Event Duration:<strong> 24 hours</strong></li>
                                <li>Number of Pictures: Unlimited (All post processed)</li>
                                <li>Specially Edited Photos: 200 copies</li>
                                <li>Print: 4R (4”x6″) Matte Prints: 100 copies</li>
                                <li>Print: 12L (12”x 18″) Matte Print: 1 copy</li>
                                <li>* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive</li>
                            </ul>
                            <Link to='/inventory'><button type="button" className="btn btn-dark m-4 btn-show ">Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;