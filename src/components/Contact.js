import React from 'react';

const Contact = () => {
    return (
        <div className="col-10 col-md-6 col-lg-4 mx-auto mt-5 mt-lg-0">
            <h3 class="text-center mt-4">Contact us</h3>
            <form className="mt-5">
                <div class="mb-3 row">
                    <div className="col-6">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                    </div>
                    <div className="col-6">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                    </div>
                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                   
                    
                </div>
                <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I Agree to the Terms and Conditions</label>
                </div>
                <button type="submit" class="btn btn-primary d-block w-100">Submit</button>
            </form>
        </div>
    );
};

export default Contact;