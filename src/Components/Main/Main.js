import React from 'react';
import Footer from '../Footer/Footer';
import Ratings from '../Ratings/Ratings';
import Service from '../Services/Services';
import './Main.css'

const Main = () => {
    return (
        <div>
        <div className='md:flex items-center justify-evenly'>
            <div className='p-2'>
                <h1 className='text-5xl text-pink-500 font-mono font-bold'>Making Photograph</h1>
                <h1 className='text-xl text-black font-mono font-bold '>To Understand The meaning OF life</h1>
                <button className='btn bg-pink-500 mt-10  text-white font-mono font-bold shadow-inner shadow-current'>JOIN NOW</button>
            </div>
            <img  className='md:w-2/5' src="https://i.ibb.co/zsqpx24/happy-young-female-photographer-with-camera.jpg"alt="" />
        </div>
        <Service></Service>
        <Ratings></Ratings>
        <Footer></Footer>
        </div>
    );
};

export default Main;