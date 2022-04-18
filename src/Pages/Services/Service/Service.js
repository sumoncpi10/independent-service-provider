import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, photographer, duration, price, copies } = service;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h4 className='m-3'>TK.{price}/=</h4>
                    {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
                </div>
                <ul class="list-style-11" >
                    <li>1 <strong>Senior</strong> {photographer} Top Associate Photographer.</li>
                    <li>Event Duration:<strong> {duration} Hours</strong></li>
                    <li>Number of Pictures: Unlimited (All post processed)</li>
                    <li>Specially Edited Photos: {copies} copies</li>
                    <li>Print: 12L (12”x 18″) Matte Print: 1 copy</li>
                    <li>Print: 5L (5”x7.5″) Matte Prints: {copies} copies</li>
                    <li>* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive</li>
                </ul>
                <Link to='/inventory'><button type="button" className="btn btn-dark m-4 btn-show ">Checkout</button></Link>
            </div>
        </div>
    );
};

export default Service;