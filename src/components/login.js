import React, { useState } from 'react';
import left from '../images/left.jpg';
import InputField from './InputField';
import './style.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        age: '',
        confirmPassword: '',
        phone: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        age: '',
        confirmPassword: '',
        phone: ''
    });
    const [isSignUp, setIsSignUp] = useState(false);

    const validateForm = () => {
        const newErrors = { ...errors };
        let isValid = true;

        if (isSignUp) {
            if (!formData.firstName) {
                newErrors.firstName = 'First name is required.';
                isValid = false;
            }
            if (!formData.lastName) {
                newErrors.lastName = 'Last name is required.';
                isValid = false;
            }
            if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
                newErrors.age = 'Please enter a valid age.';
                isValid = false;
            }
            if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
                newErrors.phone = 'Please enter a valid phone number.';
                isValid = false;
            }
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match.';
                isValid = false;
            }
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!formData.password || formData.password.length < 6) {
            newErrors.password = 'Your password must be at least 6 characters long.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Form submission logic here
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center vh-100'>
            <div className='card shadow w-75 p-4'>
                <div className='row'>
                    {isSignUp ? (
                        <>
                            <div className='col-md-6 d-flex justify-content-center align-items-center d-none d-md-block'>
                                <img src={left} alt='left' className='responsive-img img-fluid' />
                            </div>
                            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                <div className='text-center'>
                                    <h2>Sign Up</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <InputField
                                                    type='text'
                                                    name='firstName'
                                                    placeholder='First Name'
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    error={errors.firstName}
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <InputField
                                                    type='text'
                                                    name='lastName'
                                                    placeholder='Last Name'
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    error={errors.lastName}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <InputField
                                                    type='number'
                                                    name='age'
                                                    placeholder='Age'
                                                    value={formData.age}
                                                    onChange={handleChange}
                                                    error={errors.age}
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <InputField
                                                    type='text'
                                                    name='phone'
                                                    placeholder='Phone Number'
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    error={errors.phone}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <InputField
                                                    type='email'
                                                    name='email'
                                                    placeholder='Email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    error={errors.email}
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <InputField
                                                    type='password'
                                                    name='password'
                                                    placeholder='Password'
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    error={errors.password}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12 d-flex justify-content-center'>
                                                <InputField
                                                    type='password'
                                                    name='confirmPassword'
                                                    placeholder='Confirm Password'
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    error={errors.confirmPassword}
                                                />
                                            </div>
                                        </div>
                                        <button type='submit' className='btn'>Sign Up</button>
                                    </form>
                                    <p className='mt-3'>
                                        Already have an account?{' '}
                                        <button className='btn ' onClick={() => setIsSignUp(false)}>Login</button>
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                <div className='text-center'>
                                    <h2>Login</h2>
                                    <form onSubmit={handleSubmit}>
                                        <InputField
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            error={errors.email}
                                        />
                                        <InputField
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            error={errors.password}
                                        />
                                        <button type='submit' className='btn'>Login</button>
                                    </form>
                                    <p className='mt-3'>
                                        Don't have an account?{' '}
                                        <button className='btn ' onClick={() => setIsSignUp(true)}>Sign Up</button>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-6 d-flex justify-content-center align-items-center d-none d-md-block'>
                                <img src={left} alt='left' className='responsive-img img-fluid' />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
