import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>

            <p><small>New to Ema-jhon? <Link to='/signup'>Sign Up</Link></small></p>


        </div>
    );
};

export default Login;