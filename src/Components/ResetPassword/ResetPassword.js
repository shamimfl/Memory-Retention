import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)

    const handlereset = e => {
        e.preventDefault()
        const email = e.target.email.value;
        sendPasswordResetEmail(email)
        toast('sendding code by Email')
    }

    return (
        <div className='mt-5'>
            <h1 className='text-red-600 font-bold text-center'>{error ? error?.message : ''}</h1>
            <div className='flex justify-center mt-5'>
                <form onSubmit={handlereset} className='border-2 p-10'>
                    <input name='email' className='block shadow-inner shadow-current p-2' placeholder='Enter Your Email' required type="email" />
                    <input className='w-full text-white font-bold bg-pink-500 mt-5' type="submit" value="SEND" />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ResetPassword;