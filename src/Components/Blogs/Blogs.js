import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-xl text-red-500 font-bold'>Qusn : 1 Difference between authorization and authentication?</h1>
            <h1 className='text-xl text-green-500 font-bold'>Ans :</h1>
            <table className='w-full'>
                <tr className='border-2'>
                    <th className='bg-pink-200 p-2'>Authentication</th>
                    <th className='bg-pink-300 p-2'>Authorization</th>
                </tr>
                <tr className='border-2'>
                    <td className='bg-pink-200 p-2'>Authentication verifies who the user is.</td>
                    <td className='bg-pink-300 p-2'>Authorization determines what resources a user can access.</td>
                </tr>
                <tr className='border-2'>
                    <td className='bg-pink-200 p-2'>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                    <td className='bg-pink-300 p-2'>Authorization works through settings that are implemented and maintained by the organization.</td>
                </tr>
                <tr className='border-2'>
                    <td className='bg-pink-200 p-2'>Authentication is the first step of a good identity and access management process.</td>
                    <td className='bg-pink-300 p-2'>Authorization always takes place after authentication.</td>
                </tr>
            </table>
            <h1 className='text-xl text-red-500 font-bold  mt-5'>Qusn : 2 Why are you using firebase? What other options do you have to implement authentication?</h1>
            <h1 className='text-xl text-green-500 font-bold'>Ans :</h1>
            <p className=' font-bold'>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
            <p className='font-bold'>
                I have  other options implement authentication like,
                <li>Back4App</li>
                <li>Flutter</li>
                <li>Couchbase</li>
                <li>RxDB</li>
            </p>

            {/* qusn 3  */}
            <h1 className='text-xl text-red-500 font-bold  mt-5'>Qusn :3 What other services does firebase provide other than authentication</h1>
            <h1 className='text-xl text-green-500 font-bold'>Ans :</h1>
            <p className='font-bold'>
                There are many services which Firebase provides, Most useful of them are:
                <li>Cloud Firestore.</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
            </p>
        </div>
    );
};

export default Blogs;