import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoginData, setToken } from '../../Reducers/AuthRed';

const LoginPage = () => {

    const initValue = { email: '', password: '' };
    const [formValue, setFormValue] = useState(initValue);
    const [isLogin, setIsLogin] = useState(false);
    const [isToken, setIsToken] = useState(false);
    const navigate = useNavigate();

    const { user, token } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const checkLogin = () => {
        let filtData = [];
        filtData = user.filter((item) =>
            item.email === formValue.email && item.password === formValue.password
        )

        if (filtData.length !== 0) {
            dispatch(setToken(true));
            navigate('/cources')
        }
        else {
            setIsLogin(true);
            setTimeout(() => {
                setIsLogin(false)
            }, 2000);
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (!token) {
            checkLogin();
        }
        else {
            setIsToken(true);
            setTimeout(() => {
                setIsToken(false);
            }, 2000);
        }
    }

    useEffect(() => {
        dispatch(getLoginData());
    }, []);

    // console.log(user);
    // console.log(user[0].email === 'pallab@gmail.com');
    // console.log(token);
    // console.log(isToken)

    return (
        <>
            <section id="contact" className="contact d-flex justify-content-center">
                <div className="w-50  mt-5">
                    <center><h1 className='text-secondary'>Login Form</h1></center><br />
                    <div className="row justify-content-center" data-aos="fade-up">


                        {/* ==============alert for login=========== */}

                        {
                            isLogin
                            &&
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Error! </strong>
                                Email or Password does not match
                            </div>

                        }

                        {
                            isToken
                            &&
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>warning! </strong>
                                you have already login
                            </div>
                        }

                        {/* ==============Form Part=========== */}

                        <div className="col-lg-10">
                            <form role="form" className="php-email-form">


                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" onChange={handleChange} name="email" value={formValue.email} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" onChange={handleChange} name="password" value={formValue.password} className="form-control" id="name" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                </div>

                                <div className="text-center">
                                    <button className='btn btn-success' onClick={handleClick}>Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default LoginPage
