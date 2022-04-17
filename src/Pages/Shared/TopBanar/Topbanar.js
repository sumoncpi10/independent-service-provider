import React from 'react';

const Topbanar = () => {
    const path = window.location.pathname;
    console.log(path);
    if (path === '/' || path === '/home') {
        return;
    }
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://preview.colorlib.com/theme/rettro/assets/img/hero/xh2_hero.png.pagespeed.ic.qO2xVGthh6.webp" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className='mb-5 pb-5'>
                        {
                            path.includes('services') ? 'Services' : path.includes('photos') ? 'photos' : path.includes('blog') ? 'Blog' : path.includes('about') ? 'About' : path.includes('contact') ? 'Contact' : ''
                        }
                    </h1>
                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                </div>
            </div>
        </div>
    );
};

export default Topbanar;