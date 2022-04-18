import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Topbanar from '../Shared/TopBanar/Topbanar';
import Service from './Service/Service';
import './Services.css';
const Services = () => {
    const [services, SetServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => SetServices(data))

    }, []);
    return (
        <div>
            <Topbanar></Topbanar>
            <h1 className='mt-5'>Choose a plan</h1>
            <div className='container p-5'>
                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;