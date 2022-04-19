import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loadding from '../Loadding/Loadding';

const Singup = () => {
    const navigate = useNavigate()
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    // sing up -------------------------------
    const handleSingup =async (e) => {
        e.preventDefault()
        const displayName = e.target?.name?.value;
        const email = e.target?.email?.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName})
        
        
    }
    // sing out --------------------------

    const handleSinginWithGoogle =()=>{
        signInWithGoogle()
    }
    if(loading){
        return <Loadding></Loadding>
    }

    if (user) {
        navigate('/')
    }
    if(googleUser){
        navigate('/')
    }
    return (
        <div>
             <h1 className='text-red-600 font-bold text-center'>{error? error.message :''}</h1>
            {/* <h1 className='text-blue-600 font-bold mb-3 text-center'>{loading? 'Loading......' :''}</h1> */}
                <div className='flex justify-center  mt-5'>
                   
                    <form onSubmit={handleSingup} className=' shadow-lg p-5'>
                        <h1 className='font-serif text-pink-600 text-center  mb-1'>Please Singup</h1>
                        <input type="text" name='name' className='block mb-5  p-2 shadow-inner shadow-current' placeholder='Enter Your Name' required />
                        <input type="email" name='email' className='block  mb-5 p-2  shadow-inner shadow-current' placeholder='Enter Your Email' required />
                        <input type="password" name='password' className='block  mb-3 p-2 shadow-inner shadow-current' placeholder='Enter a New Password' required />
                        
                        <input type="submit" className='bg-pink-600 rounded-sm px-2 text-white font-mono font-bold mb-2' value="SING UP" />
                       
                        
                        <Link to='/login' className='font-serif text-pink-600 block'>Allrady have an account ?</Link>
                        <div className='border-1 border-pink-500 mt-2 mb-2'></div>
                        
                    </form>
                    </div>
                    <div className='flex justify-center'>
            <button onClick={handleSinginWithGoogle} className='mt-2 font-serif text-pink-600'> <span className='text-2xl font-thin bg-pink-50  text-pink-600 border-2 border-pink-600 px-2 rounded-full'>G</span> Sing In With Google</button>
            </div>
        </div>
    );
};

export default Singup;