import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contex } from './Contex.jsx/ContexProvider';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {

    const { handleregister } = useContext(contex)


    let [visible, setVisivle] = useState(false)


    let onS = (e) => {
        e.preventDefault()
        let form = e.target

        let email = form.email.value
        let password = form.password.value
        console.log(email, password);

        handleregister(email, password)
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
                verify(res.user)
            })


    }

    let verify = (customer) => {

        sendEmailVerification(customer)

        alert("verefy your email")
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={onS} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={visible ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                                <div onClick={() => setVisivle(!visible)}>

                                    {
                                        visible ? "hide" : "show"
                                    }
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">register</button>
                            </div>
                            <div>
                                <Link to="/Login">new to digital shope</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;