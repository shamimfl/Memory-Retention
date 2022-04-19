import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ data }) => {
    
    const navigate= useNavigate()
    
    const handleBook=()=>{
            navigate('/chekout')
    }
    return (

        <div>
            <div className='p-5 shadow-lg shadow-current rounded-lg'>
                <img className='w-full h-60 rounded-lg' src={data.img} alt="" />
                <h1 className='text-center text-xl font-bold font-mono  text-pink-500' >{data.name}</h1>
                <h1 className='font-bold font-mono  text-slate-600'>{data.describe}</h1>
                <div className='flex justify-between'>
                    <h1 className='font-bold font-mono text-2xl text-slate-600'>{data.price} $</h1>
                    <span className='bg-pink-400 px-3 rounded-sm py-1 mt-2 font-bold font-mono text-white'>
                        <button onClick={handleBook} className='cursor-pointer'>Book Now</button>
                    </span>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;