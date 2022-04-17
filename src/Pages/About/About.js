import React from 'react';
import Topbanar from '../Shared/TopBanar/Topbanar';

const About = () => {
    return (
        <div>
            <Topbanar></Topbanar>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h1 className=''>With my camera, I capture daily life</h1>
                    </div>
                    <div className='col-md-7'>
                        <p>CAPTURING THE BEAUTY OF EVERYDAY life — of the “mundane” — is, to me, travel photography. Your life is full of stories that are travel to someone else, no matter where you live. You don’t need a fancy camera or plane ticket to photograph your surroundings with purpose and emotion. You can open understanding and break down cross-cultural boundaries by providing a photographic window from your own backyard.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;