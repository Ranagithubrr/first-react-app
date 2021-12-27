import React, { useState } from 'react';
import data from '../data/Datas.json'
import Product from './Product';



const Service = () => {

    const datas = data.slice(0, 9)
    const [product, productInc] = useState(datas)
    return (
        <>
            <h1 className="text-center my-4">Our Services</h1>
            
                <div class="card-deck card-areas">
                <div className="row g-4">
                    {
                        product.map(item =>
                                <Product
                                    Name={item.name}
                                    Price={item.price}
                                    Id={item.id}
                                    Pic={item.image}
                                    Company={item.company}
                                    Details={item.details}
                                >

                                </Product>

                        )
                        // product.map(item=> console.log(item))
                    }
                </div>
            </div>


        </>
    );
};

export default Service;