import React, { useState, useEffect } from 'react';
import { postApiData } from '../AxiosMethods/AxiosMethods'
// import { useNavigate } from 'react-router-dom';



const ContactForm = () => {
    const initialValue = { name: '', email: '', subject: '',message:''}
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    // const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }
    const addContactData = async () => {
        await postApiData('contactData', formValue)
    }
    const handleClick = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        setIsSubmit(true)
    }
    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            addContactData();
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
        if (values.subject.length === 0) {
            error.subject = 'Subject is Required'
        }
        if (values.message.length === 0) {
            error.message = 'Message is Required'
        }
        return error;
    }
    return (
        <>
            <div className="row mt-5 justify-content-center" data-aos="fade-up">
                {
                    Object.keys(formError).length === 0 && isSubmit
                    &&
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success! </strong>
                        your Form Was submited successfully
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <div className="col-lg-10">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="form-row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" onChange={handleChange} value={formValue.name} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <span className='text-danger'>{formError.name}</span>
                                {/* <div className="validate"></div> */}
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="email" className="form-control" onChange={handleChange} value={formValue.email} name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <span className='text-danger'>{formError.email}</span>
                                {/* <div className="validate"></div> */}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={handleChange} value={formValue.subject} name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <span className='text-danger'>{formError.subject}</span>
                            {/* <div className="validate"></div> */}
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" onChange={handleChange} value={formValue.message} name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <span className='text-danger'>{formError.message}</span>
                            {/* <div className="validate"></div> */}
                            
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <button onClick={handleClick} className='btn btn-success m-2' type="submit">Send Message</button>

                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default ContactForm