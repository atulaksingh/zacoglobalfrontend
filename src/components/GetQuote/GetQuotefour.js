import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { getQuoteTwo } from '@/data/getQuote';

function GetQuotefour() {
    const { title, text, address, email, phone, inputs } = getQuoteTwo;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/contact/', data);
            // console.log("Response:", response.data);
            reset();
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="inner mt-5">
                <div className="sec-title text-white">
                    <h2 className="text-white font-bold text-center">Get in touch<span className="dot"></span></h2>
                </div>
                <div className="form-box">
                    <div className="default-form">
                        <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                            <Row className="clearfix">
                                {inputs.map(({ name, type, placeholder }) => (
                                    <Col
                                        key={name}
                                        lg={type ? 6 : 12}
                                        md={type ? 6 : 12}
                                        sm={12}
                                        className="form-group"
                                    >
                                        <div className="field-inner">
                                            {type ? (
                                                <input
                                                    type={type}
                                                    name={name}
                                                    placeholder={placeholder}
                                                    {...register(name, { required: true })}
                                                />
                                            ) : (
                                                <textarea
                                                    name={name}
                                                    placeholder={placeholder}
                                                    {...register(name, { required: true })}
                                                ></textarea>
                                            )}
                                            {errors[name] && (
                                                <label htmlFor={name} className="error">
                                                    This Field Is Required.
                                                </label>
                                            )}
                                        </div>
                                    </Col>
                                ))}
                                <Col lg={12} md={12} sm={12} className="form-group">
                                    <button className="theme-btn btn-style-one" type="submit" disabled={loading}>
                                        <i className="btn-curve"></i>
                                        <span className="btn-title">
                                            {loading ? 'Loading...' : 'Send message'}
                                        </span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetQuotefour;
