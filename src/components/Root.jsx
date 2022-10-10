import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
export const ProductsContext = createContext([]);
const Root = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
        <ProductsContext.Provider value={products}>
            <Header />
            <Outlet />
            <Footer />
        </ProductsContext.Provider>
    );
};

export default Root;