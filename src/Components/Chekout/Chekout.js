import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chekout = () => {
    const navigate =useNavigate()
    const handleChekout =()=>{
        navigate('/wellcome')
    }
    return (
        <div>
            <div className='flex justify-center  mt-5'>
                <form onSubmit={handleChekout} className=' shadow-lg p-5'>
                    <h1 className='font-serif text-pink-600 text-center  mb-1'>Fill In The Blanks</h1>
                    <input type="email" className='block  mb-3 p-2  shadow-inner shadow-current' placeholder='Enter Your Email' required />
                    <input type="text" className='block  mb-3 p-2  shadow-inner shadow-current' placeholder='Enter Your Name' required />
                    <input type="text" className='block  mb-3 p-2  shadow-inner shadow-current' placeholder='Enter Your phone Number' required />
                    <input type="text" className='block  mb-3 p-2  shadow-inner shadow-current' placeholder='Enter Your Address' required />
                    <input type="text" className='block  mb-3 p-2  shadow-inner shadow-current' placeholder='Enter Your Ariea' required />
                    <span className='flex items-center justify-around'>
                        <input className='block  mb-3 p-2 mt-3 shadow-inner shadow-current' type="checkbox" name="" id="" required/>
                        <p className='font-mono '>Agree Our Trems...</p>
                    </span>

                    <div className='border-1 border-pink-500 mt-2 mb-2'></div>
                    <input  type="submit" className='bg-pink-600 rounded-sm px-2 text-white font-mono font-bold mb-2 w-full' value="Chek Out" />
                </form>
            </div>
        </div>
    );
};

export default Chekout;