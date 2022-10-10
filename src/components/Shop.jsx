import React, { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from './Root';

const Shop = () => {
    const products = useContext(ProductsContext);
    // console.log(products)
    return (
        <div className='container px-4 py-16 m-auto grid md:grid-cols-4 gap-8 my-2'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                />)
            }
        </div>
    );
};

export default Shop;