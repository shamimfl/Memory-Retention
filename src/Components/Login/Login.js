import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loadding from '../Loadding/Loadding';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target?.email?.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    const handleSinginWithGoogle = () => {
        signInWithGoogle()

    }
    // location ----------
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    if (loading) {
        return <Loadding></Loadding>
    }

    if (googleUser) {
        navigate(from, { replace: true })
    }
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <h1 className='text-red-600 font-bold text-center'>{error ? error.message : ''}</h1>
            <h1 className='text-blue-600 font-bold mb-3 text-center'>{loading ? 'Loading......' : ''}</h1>
            <div className='flex justify-center  mt-5'>

                <form onSubmit={handleLogin} className=' shadow-lg p-5'>

                    <h1 className='font-serif text-pink-600 text-center  mb-1'>Please LogIn</h1>
                    <input type="email" name='email' className='block  mb-5 p-2  shadow-inner shadow-current' placeholder='Enter Your Email' required />
                    <input type="password" name='password' className='block  mb-3 p-2 shadow-inner shadow-current' placeholder='Enter a New Password' required />
                    <input type="submit" className='bg-pink-600 rounded-sm px-2 text-white font-mono font-bold mb-2' value="LOG IN" />
                    <Link to='/reset' className='font-serif text-pink-600 block mb-2'><small>Forget password ?</small></Link>
                    <Link to='/Singup' className='font-serif text-pink-600 block'>Create New account ?</Link>
                    <div className='border-1 border-pink-500 mt-2 mb-2'></div>

                </form>
            </div>
            <div className='flex justify-center'>
            <button onClick={handleSinginWithGoogle} className='mt-2 font-serif text-pink-600'> <span className='text-2xl font-thin bg-pink-50  text-pink-600 border-2 border-pink-600 px-2 rounded-full'>G</span> Sing In With Google</button>
            </div>
        </div>
    );
};

export default Login;