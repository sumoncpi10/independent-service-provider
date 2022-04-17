import React from 'react';
import About from '../About/About';
import Photos from '../Photos/Photos';
import Services from '../Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <div className='p-5'>
                <Photos></Photos>

            </div>
            <div className='p-5'><About></About></div>

        </div>
    );
};

export default Home;