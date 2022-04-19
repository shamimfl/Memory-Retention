
import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [service, setService] =useState([])
    useEffect(()=>{
        fetch('servicedata.json')
        .then(res=>res.json())
        .then(data=> setService(data))
    },[])

    return (
        <div>
            <h1 className='text-center text-3xl font-bold font-mono sm:mt-0 md:mt-5 mt-5 text-pink-500'>Service</h1>
            <div className='md:grid grid-cols-3 gap-10 mt-10 container'>
               {
                   service.map(data=> <Service key={data.id} data={data}></Service>)
               }
            </div>
        </div>
    );
};

export default Services;