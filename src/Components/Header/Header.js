import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Header = () => {
    const [user]=useAuthState(auth)
    const HandlesingOut =()=>{
        signOut(auth)
    }
    console.log(user)
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-pink-50 shadow-sm ">
                <div className="container p-2">
                    <h1 className='text-xl font-mono mr-3 text-pink-700 font-bold underline shadow-inner shadow-current  p-2'>Memory-Retention</h1>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className='text-pink-500 font-mono mr-5 font-bold' to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-pink-500 font-mono mr-5 font-bold ' to='/aboutme'>ABOUT ME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-pink-500 font-mono mr-5 font-bold ' to='/blogs'>BLOGS</Link>
                            </li>
                            <li className="nav-item">
                            <h1 className='text-pink-900 font-bold'>{user?.displayName}</h1>
                            </li>
                        </ul>
                        <div className="navbar-text">
                           
                            <Link className='text-white font-mono mr-5 font-bold  bg-pink-500 px-3 py-1 rounded-2xl' to='/singup'> SING UP</Link>
                            
                            {
                                user?  <button onClick={HandlesingOut} className='text-white font-mono mr-5 font-bold  bg-pink-500 px-3 py-1 rounded-2xl'>Log OUT</button> :
                                <Link className='text-white font-mono mr-5 font-bold  bg-pink-500 px-3 py-1 rounded-2xl' to='/login'>LOGIN</Link>
                            }
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;