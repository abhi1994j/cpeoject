import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginData } from '../../Reducers/AuthRed';

const Registration = () => {
  const { user } = useSelector(state => state.auth);

  const initValue = { email: '', password: '' };
  const [formValue, setFormValue] = useState(initValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isExist, setIsExist] = useState(false)
  const dispatch = useDispatch();


  const validate = (values) => {
    const error = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email.length) {
      error.email = 'Email Address is Required';
    }
    else if (!emailRegex.test(values.email)) {
      error.email = 'Enter a valid Email'
    }

    if (!values.password.length) {
      error.password = 'Password is Required';
    }
    else if (values.password.length < 6 || values.password.length > 10) {
      error.password = 'Password is between 6 and 10 letters';
    }
    return error;
  }

  const addRegData = async () => {
    await axios.post('http://127.0.0.1:3003/loginData', formValue);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const handleClick = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  }

  const checkRegister = () => {
    let filtData = [];
    filtData = user.filter((item) => item.email === formValue.email)
    if (filtData.length === 0) {
      addRegData();
      dispatch(getLoginData());
      setFormValue(initValue);

      setIsRegister(true);
      setTimeout(() => {
        setIsRegister(false);
      }, 2000);
    }
    else {
      setIsExist(true);
      setTimeout(() => {
        setIsExist(false);
      }, 2000);
    }
  }

  useEffect(() => {

    dispatch(getLoginData());

    if (Object.keys(formError).length === 0 && isSubmit) {
      checkRegister();
    }

  }, [formError]);

  // console.log(formError);
  // console.log(user);

  return (
    <>
      <section id="contact" className="contact d-flex justify-content-center">
        <div className="w-50">
          <div className="row mt-5 justify-content-center" data-aos="fade-up">

            <h1 className='text-secondary'>Registration Form</h1>

            {/* ==========alert Para============== */}

            {
              isRegister
              &&
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success! </strong>
                your Registration Was successfully, please login
              </div>
            }

            {
              isExist
              &&
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error! </strong>
                This email is Exist, Please try another email
              </div>
            }

            {/* =========form Part================ */}

            <div className="col-lg-10">
              <form role="form" className="php-email-form">

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" className="form-control" onChange={handleChange} name="email" value={formValue.email} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <span className='text-danger'>{formError.email}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" onChange={handleChange} name="password" value={formValue.password} className="form-control" id="name" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <span className='text-danger'>{formError.password}</span>
                </div>

                <div className="text-center">
                  <button className='btn btn-success' onClick={handleClick}>Register</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </ >
  )
}

export default Registration;
