import React from 'react';

const Common = (props) => {
    return (
        <>
            <div id="common" className="d-flex align-items-center">
                <div className="row col-10 mx-auto d-flex align-items-center pt-5 mt-5">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <p className="mypara mt-4 mt-lg-0">{props.demoText}</p>
                        <h3 className="secondHead">Lorem ipsum <span style={{color:"red"}}>Dollor</span> sit amet.</h3>
                        <h3 className="my-4 second-head">{props.secondHead}</h3>
                        <button className="btn btn-outline-primary">{props.buttonOne}</button>
                        <button className="btn btn-danger ms-2">{props.buttonTwo}</button>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <img src={props.img} className="img-fluid" alt="" />
                    </div>
        
                </div>
            </div>


        </>
    );
};

export default Common;