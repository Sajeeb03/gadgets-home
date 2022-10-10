import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col gap-4 justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            <h1 className='text-5xl font-bold'>404</h1>
            <p className='text-3xl font-bold'>Page Not Found</p>
            <Link to='/home'><button className='bg-cyan-500 rounded-full px-8 py-3 text-lg font-semibold'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;