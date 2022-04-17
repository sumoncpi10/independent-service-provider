import React, { useState } from 'react';

const Photo = ({ photo }) => {


    const path = window.location.pathname;
    // console.log(path);
    if ((path !== '/photos') && (path !== '/home') && (path !== '/') && !path.includes(photo.category)) {
        return
    }
    const { img, id } = photo;

    if ((path !== '/photos') && id > 8) {
        return
    }

    return (
        <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
            <a href={img} className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src={img} alt="" />
            </a>
        </div>
    );
};

export default Photo;