import React from 'react';
import img from './img.png'

const About = () => {
    return (
        <div className='md:flex justify-around container items-center mt-5'>
            <div className='text-xl  text-pink-400 font-bold'>
                <h1 className='text-3xl text-pink-700'>I am , MD. Shamim Islam</h1>
                <p>My goal is that I am not developer,Want to be a skilled web developer. I want to gain higher knowledge about programming.To fulfill my goal, I chose Programming Heroes as my guideline.I try to do all the work given by the programmer hero on time.I am trying to practice according to their instructions.</p>
            </div>
            <div className='md:w-2/4'>
                <img className='border-2 border-pink-500 bg-pink-400' src={img} alt="" />
            </div>
        </div>
    );
};

export default About;