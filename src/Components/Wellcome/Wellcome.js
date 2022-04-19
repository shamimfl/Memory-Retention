import React from 'react';
import { Link } from 'react-router-dom';

const Wellcome = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center   mt-5'>
                    <div className='bg-pink-500 p-10'>
                    <div className=' shadow-inner shadow-current p-5 bg-pink-500'>
                        <h1 className='font-serif text-white text-center text-xl  mb-1'>Wellcome</h1>

                        <Link to='/'  className=' text-pink-600 rounded-sm px-2 bg-white font-mono font-bold mb-2 w-full'>GO To HOME</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wellcome;