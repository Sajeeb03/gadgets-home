import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Assets/home.jpg'

const Home = () => {
    return (
        <div>
            <div className='bg-gray-200 h-96 pt-8'>
                <h1 className='text-4xl font-bold text-center'>Welcome to Gadgets-Home</h1>
                <p className='text-center w-1/2 m-auto mt-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis alias, odit minus autem itaque ullam. Dolores fuga vel ipsum, asperiores voluptatibus quibusdam consectetur saepe tenetur cumque. Iste impedit quaerat illo!</p>
                <div className='flex justify-center gap-3 mt-4'>
                    <Link to='/shop'>
                        <button className='rounded-full bg-cyan-600 px-8 py-3 text-lg font-semibold hover:bg-cyan-900'>Shop Now</button>
                    </Link>
                    <Link to='about'>
                        <button className='rounded-full border-2 border-cyan-600 px-8 py-2 text-lg font-semibold'>Learn More</button>
                    </Link>
                </div>
            </div>
            <img className='container h-screen w-full m-auto -mt-20' src={img} alt="" />
        </div>
    );
};

export default Home;