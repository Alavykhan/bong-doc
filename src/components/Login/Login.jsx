import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

        signIn(email, password)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
                <h1 className='text-3xl font-semibold'>Login</h1>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
                </div>
                <p>Don't have an account please <Link to='/signUp' className='font-bold'>Sign Up</Link></p>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;