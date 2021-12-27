import React from 'react';
import { Link } from 'react-router-dom';
import Pic from '../img/man.svg'

const Product = (props) => {
    return (
        <>
            <div className="col-10 col-lg-4 m-auto my-3 my-lg-0">
                <div className="card border-primary service-card my-1 my-lg-4">

                    <img className="card-img-top w-50 text-center m-auto" src={props.Pic} alt="Card imagecap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.Name}</h5>
                        <p className="card-text">{props.Details}</p>
                        <span className="prices">Price: {props.Price} Only</span>
                        <span className="prices">Product ID: {props.Id}</span>
                        <span className="prices">Seller: {props.Company}</span>
                    </div>
                    <div className="card-footer bg-white border-top-0">
                        <button className="btn btn-primary w-100">Order Now {props.Price}</button>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Product;