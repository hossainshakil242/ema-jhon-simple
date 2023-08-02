import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');

    const {createUser}=useContext(AuthContext);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);

        setError('');

        if (password !== confirmPassword) {
            setError('your password did not match');
            return;
        }
        else if(password.length>6){
            setError ('password must be 6 characters or longer');
            return;
        }

        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            setError(error.message);
        })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <p className='text-error'>{error}</p>

        </div>
    );
};

export default SignUp;