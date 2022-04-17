import React from 'react';

const Photo = ({ photo }) => {
    console.log(photo)
    const { img } = photo;
    return (
        <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
            <a href={img} class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid" src={img} alt="" />
            </a>
        </div>
    );
};

export default Photo;