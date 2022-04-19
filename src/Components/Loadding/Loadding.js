import React from 'react';
import loadding from './loadding.gif'

const Loadding = () => {
    return (
        <div className='flex justify-center'>
            <img src={loadding} alt="" />
        </div>
    );
};

export default Loadding;