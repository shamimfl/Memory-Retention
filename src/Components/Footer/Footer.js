import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-pink-300 p-10 font-mono'>
           
            <div className='md:grid grid-cols-4 bg-pink-300 p-10 font-mono'>
                <div>
                    <h1>Memory Retention</h1>
                    <p>UK PRODUCT PHOTOGRAPHY</p>
                    <p>The Viaduct Business Centre.</p>
                    <p>Coldharbour Lane, Brixton</p>
                    <p>London, SW9 8PL</p>
                </div>
                <div>
                    <li>Home</li>
                    <li>FAQS</li>
                    <li>Contract Me</li>
                    <li>Place Order</li>
                </div>
                <div>
                    <li>Ghost Mannequin</li>
                    <li> On-Model</li>
                    <li> Flat / Flats</li>
                    <li>  Packshot / Packshots</li>
                </div>
                <div>
                    <li> Homeware</li>
                    <li>  Large Items</li>
                    <li>  Amazon Photography</li>
                    <li>  360 Photography</li>
                    <div>
                        <li> Privacy Policy</li>
                        <li> Terms & Conditions</li>
                    </div>
                </div>
            </div>
        <div className='border-1 border-black'></div>
        <h1 className='text-xl text-center mt-5'>Copyright © 2022 All Rights Reserved by MD: SHAMIM.</h1>
        </div>
    );
};

export default Footer;