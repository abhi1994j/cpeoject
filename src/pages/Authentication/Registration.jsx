import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLoginData } from '../../Reducers/AuthRed';
import {ExistModal, RegistrationModal} from './RegistrationModal';

const Registration = () => {

  const { user } = useSelector(state => state.auth);

  const initValue = { name: '', email: '', phone: '', password: '' };
  const [formValue, setFormValue] = useState(initValue);
  const [conPass, setConPass] = useState('');

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isExist, setIsExist] = useState(false)
  const dispatch = useDispatch();


  const validate = (values, conpass) => {
    const error = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.name.length) {
      error.name = 'Name is Required';
    }

    if (!values.email.length) {
      error.email = 'Email Address is Required';
    }
    else if (!emailRegex.test(values.email)) {
      error.email = 'Enter a valid Email'
    }

    if (!values.phone.length) {
      error.phone = 'Phone Number is Required';
    }
    else if (!/[0-9]/.test(values.phone)) {
      error.phone = 'Enter number';
    }
    else if (values.phone.length !== 10) {
      error.phone = 'Phone number should be of 10 numbers';
    }

    if (!values.password.length) {
      error.password = 'Password is Required';
    }
    else if (values.password.length < 6 || values.password.length > 10) {
      error.password = 'Password is between 6 and 10 letters';
    }

    if (!conpass.length) {
      error.conpass = 'Confirm Password is Required';
    }
    else if (conpass !== values.password) {
      error.conpass = 'Confirm Password does not match with Password';
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
    setFormError(validate(formValue, conPass));
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
    }
    else {
      setIsExist(true);
    }
  }

  useEffect(() => {

    dispatch(getLoginData());

    if (Object.keys(formError).length === 0 && isSubmit) {
      checkRegister();
    }

  }, [formError]);

  // console.log(conPass);
  // console.log(user);

  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Registration</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>Registration</li>
            </ol>
          </div>

        </div>
      </section>


      {/* ================== Courses ======================= */}

      <section id="contact" className="contact d-flex justify-content-center">
        <div className="w-50">
          <div className="row mt-5 justify-content-center" data-aos="fade-up">

            <h1 className='text-secondary'>Registration Form</h1>

            {/* ==========alert Para============== */}

            {/* {
              isRegister
              &&
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success! </strong>
                your Registration Was successfully, please login
              </div>
            } */}

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
                  <label htmlFor="name">Full Name</label>
                  <input type="text" className="form-control" onChange={handleChange} name="name" value={formValue.name} placeholder="Your Name" data-rule="email" />
                  <span className='text-danger'>{formError.name}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" className="form-control" onChange={handleChange} name="email" value={formValue.email} placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <span className='text-danger'>{formError.email}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" className="form-control" onChange={handleChange} name="phone" value={formValue.phone} placeholder="Your Phone Number" maxLength={10} data-rule="email" />
                  <span className='text-danger'>{formError.phone}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" onChange={handleChange} name="password" value={formValue.password} className="form-control" placeholder="Your Password" data-rule="minlen:4" />
                  <span className='text-danger'>{formError.password}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="conpass">Confirm Password</label>
                  <input type="password" onChange={(e) => setConPass(e.target.value)} name="conpass" value={conPass} className="form-control" placeholder="Confirm Password" data-rule="minlen:4" />
                  <span className='text-danger'>{formError.conpass}</span>
                </div>


                <div className="text-center">
                  <button className='btn btn-primary' onClick={handleClick}>Register</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ============== Modal Part ================= */}

      <RegistrationModal open={isRegister} setOpen={setIsRegister}/>
      <ExistModal open={isExist} setOpen={setIsExist}/>

    </ >
  )
}

export default Registration;
