import React from 'react';
import errorLottie from '../../assets/Animation - 1739077826539.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className=' flex   items-center flex-col '>
        <div>

<Lottie  animationData={errorLottie} className='w-80'></Lottie>
        </div>
        <Link
            to="/"
            className="   px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans"
        >
            <span>Back to home</span>
         </Link>
    </div>
    );
};

export default ErrorPage;