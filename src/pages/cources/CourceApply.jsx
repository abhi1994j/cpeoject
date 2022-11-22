import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postApiData } from '../../AxiosMethods/AxiosMethods';

const CourceApply = () => {

    const {courceName}=useParams();
    const initialValue = {courceName:courceName, name: '', email: '', phone: '', qualification: '' }
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const addApplyData = async () => {
        await postApiData('courseApply', formValue)
    }

    const handleClick = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            addApplyData();
            setFormValue(initialValue);
        }
    }, [formError])

    const validate = (values) => {
        const error = {};
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (values.name.length === 0) {
            error.name = 'Name is Required'
        }

        if (values.email.length === 0) {
            error.email = 'Email Address is Required'
        }
        else if (!emailRegex.test(values.email)) {
            error.email = 'Enter a valid Email'
        }

        if (values.phone.length === 0) {
            error.phone = 'Phone Number is Required'
        }

        else if (!/[0-9]/.test(values.phone)) {
            error.phone = 'Enter number'
        }

        else if (values.phone.length !== 10) {
            error.phone = 'Phone Numbe must have 10 digit'
        }

        if (values.qualification.length === 0) {
            error.qualification = 'Qualification is Required'
        }
        return error;
    }

    return (
        <>

            {/* <!-- ======= Apply Form ======= --> */}
            <section id="contact" className="contact">
                <div className="container">

                    <div className="row mt-5 justify-content-center" data-aos="fade-up">

                        

                        {
                            Object.keys(formError).length === 0 && isSubmit
                            &&
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Success! </strong>
                                your Application for <strong>{courceName}</strong> Was submited successfully
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }

                        <div className="col-lg-10">
                            <form className="php-email-form">
                           <center> <h3>Application for <strong> {courceName} </strong></h3></center>

                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" onChange={handleChange} value={formValue.name} name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" />
                                    <span className='text-danger'>{formError.name}</span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Email address</label>
                                    <input type="email" className="form-control" onChange={handleChange} value={formValue.email} name="email" id="email" placeholder="Your Email" data-rule="email" />
                                    <span className='text-danger'>{formError.email}</span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Phone Number</label>
                                    <input type="tel" className="form-control" onChange={handleChange} value={formValue.phone} name="phone" id="email" placeholder="Your Phone Number" maxLength={10} />
                                    <span className='text-danger'>{formError.phone}</span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Qualification</label>
                                    <input type="text" className="form-control" onChange={handleChange} value={formValue.qualification} name="qualification" id="email" placeholder="Qualification" />
                                    <span className='text-danger'>{formError.qualification}</span>
                                </div>

                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>

                                <div className="text-center">
                                    <button onClick={() => navigate('/cources')} className='btn btn-secondary m-2'>Cancel</button>
                                    <button onClick={handleClick} className='btn btn-success m-2'>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default CourceApply;
