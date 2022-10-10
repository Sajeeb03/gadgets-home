import React from 'react';

const Product = ({ product }) => {
    const { name, id, price, img, category } = product;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{category}</span>
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
            <p className="dark:text-gray-100">Price: ${price}</p>
            <button className='bg-cyan-400 rounded-full px-7 py-2 my-2'>Add To Cart</button>
        </div>
    );
};

export default Product;