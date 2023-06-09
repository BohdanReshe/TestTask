import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import $ from 'jquery';
import axios from 'axios';
import { Success } from './elements/Success';
import { Error } from './elements/Error'

function ContactUs() {
    var bIncludeAddressDetails = false;
    const initialValues = {
        EmailAddress: '',
        FullName: '',
        PhoneNumber1: '',
        PhoneNumber2: '',
        Message: '',
        AddressLine1: '',
        AddressLine2: '',
        CityTown: '',
        StateCounty: '',
        Postcode: '',
        Country: ''
    };

    const onSubmit = (values) => {
        console.log('onSubmit', values);
        var data = {};
        data["FullName"] = values.FullName;
        data["EmailAddress"] = values.EmailAddress;
        data["Message"] = values.Message;
        if (values.PhoneNumber1 !== "") {
            data["PhoneNumbers"] = [values.PhoneNumber1]
        }
        if (values.PhoneNumber2 !== "") {
            data["PhoneNumbers"] = [values.PhoneNumber1, values.PhoneNumber2]
        }
        if (bIncludeAddressDetails == true) {
            data["bIncludeAddressDetails"] = true;
            data["AddressDetails"] = {
                "AddressLine1": values.AddressLine1,
                "AddressLine2": values.AddressLine2,
                "CityTown": values.CityTown,
                "StateCounty": values.StateCounty,
                "Postcode": values.Postcode,
                "Country": values.Country
            }
        } else {
            data["bIncludeAddressDetails"] = false;
        }
        console.log("data to send:", data);

        axios.post('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', data)
            .then(res => {
                console.log("RESPONSE: ", res);
                if (res.status == 200) {
                    // alert("success");
                    $(".form").hide();
                    $(".successCard").show();
                }
            })
            .catch(err => {
                console.log("ERROR: ", err);
                $(".form").hide();
                $(".errorCard").show();
            });
    };

    const [validationSchema, setValidationSchema] = useState([]);
    useEffect(() => {
        $('#isAddressChecked').prop('checked', false);
        setValidationSchema(
            Yup.object({
                FullName: Yup.string().required("Need to supply a value"),
                EmailAddress: Yup.string().
                    required("Need to supply a value").
                    email("Email address is invalid"),
                PhoneNumber1: Yup.string().
                    max(20, "Cannot exceed 20 characters"),
                PhoneNumber2: Yup.string().
                    max(20, "Cannot exceed 20 characters"),
                Message: Yup.string().
                    required("Need to supply a value").
                    max(500, "The message provided exceeds the maximum length allowed"),

            })
        )

        $("#addSecondPhoneNumberBtn").on("click", function () {
            $("#secondPhoneNumberField").show();
        });

        $("#isAddressChecked").on('change', function () {
            if (!$(this).prop('checked')) {
                $('#addressFields').hide(200);
                bIncludeAddressDetails = false;

            }
            if ($(this).prop('checked')) {
                $('#addressFields').show(200);
                bIncludeAddressDetails = true;
                setValidationSchema(
                    Yup.object({
                        FullName: Yup.string().
                            required("Need to supply a value"),
                        EmailAddress: Yup.string().
                            required("Need to supply a value").
                            email("Email address is invalid"),
                        PhoneNumber1: Yup.string().
                            max(20, "Cannot exceed 20 characters"),
                        PhoneNumber2: Yup.string().
                            max(20, "Cannot exceed 20 characters"),
                        Message: Yup.string().
                            required("Need to supply a value").
                            max(500, "The message provided exceeds the maximum length allowed"),
                        AddressLine1: Yup.string().
                            required("Need to supply a value"),
                        CityTown: Yup.string().
                            required("Need to supply a value"),
                        StateCounty: Yup.string().
                            required("Need to supply a value"),
                        Postcode: Yup.string().
                            required("Need to supply a value").
                            matches(/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i, "Not a valid UK postcode"),
                        Country: Yup.string().
                            required("Need to supply a value")
                    })
                )
            }
        });
    }, [])
    return (
        <div className="contactUsPage">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {() => (
                    <table className="contactUsContainer">
                        <tbody>
                            <tr>
                                <td className="contactUsFormContainer">
                                    <div>
                                        <h3 className="contactUsTxt">Contact us</h3>
                                    </div>
                                    <div>
                                        <p className="contactUsParagraph"><b>Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</b></p>
                                    </div>
                                    <Form className='form'>
                                        <div className="multipleColumn">
                                            <div className="fname">
                                                <label htmlFor="fname">Full name</label>
                                                <Field className="field" name="FullName" id="fname" />
                                                <div className="error"><ErrorMessage name="FullName" component="span" /></div>
                                            </div>
                                            <div className="email">
                                                <label htmlFor="email">Email address</label>
                                                <Field className="field" type="email" name="EmailAddress" id="email" />
                                                <div className="error"><ErrorMessage name="EmailAddress" component="span" /></div>
                                            </div>
                                        </div>
                                        <div className="phone1">
                                            <label htmlFor="phone1">Phone number 01 <i className='washyTxt'>- optional</i></label>
                                            <Field className="field" name="PhoneNumber1" id="phone1" />
                                            <div className="error"><ErrorMessage name="PhoneNumbers" component="span" /></div>
                                        </div>
                                        <div className="secondPhoneNumberField">
                                            <span id="secondPhoneNumberField">
                                                <label htmlFor="phone2">Phone number 02 <i className='washyTxt'>- optional</i></label>
                                                <Field className="field" name="PhoneNumber2" id="phone2" />
                                                <div className="error"><ErrorMessage name="PhoneNumber2" component="span" /></div>
                                            </span>
                                        </div><br />
                                        <div className="addSecondPhoneNumberBtn">
                                            <button type="button" id="addSecondPhoneNumberBtn">Add new phone number</button><br />
                                        </div>
                                        <div className="message">
                                            <label htmlFor="message">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Message
                                                            </td>
                                                            <td id="messageLabelMaxLengthTxt" className='washyTxt'>
                                                                Maximum text length is 500 characters
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </label>
                                            <Field className="field" as="textarea" name="Message" id="message" />
                                            <div className="error"><ErrorMessage name="Message" component="span" /></div>
                                        </div>
                                        <div className="isAddressChecked">
                                            <input id="isAddressChecked" type="checkbox" /><span className='addAddressTxt'>Add address details</span><br />
                                        </div>
                                        <span id="addressFields">
                                            <div className='multipleColumn'>
                                                <div className="addressLine1">
                                                    <label htmlFor="addressLine1">Address line 1</label>
                                                    <Field className="field" name="AddressLine1" id="addressLine1" />
                                                    <div className="error"><ErrorMessage name="AddressLine1" component="span" /></div>
                                                </div>
                                                <div>
                                                    <label htmlFor="addressLine2">Address line 2 <i className='washyTxt'>- optional</i></label>
                                                    <Field className="field" name="AddressLine2" id="addressLine2" /><br />
                                                    <div className="error"><ErrorMessage name="AddressLine2" component="span" /></div>
                                                </div>
                                            </div>

                                            <div className="multipleColumn">
                                                <div className="multipleColumnResp">
                                                    <div className="cityTown">
                                                        <label htmlFor="cityTown">City/Town</label>
                                                        <Field className="field" name="CityTown" id="cityTown" />
                                                        <div className="shortError"><ErrorMessage name="CityTown" component="span" /></div>
                                                    </div>
                                                    <div className="stateCounty">
                                                        <label htmlFor="stateCounty">State/County</label>
                                                        <Field className="field" name="StateCounty" id="stateCounty" />
                                                        <div className="shortError"><ErrorMessage name="StateCounty" component="span" /></div>
                                                    </div>
                                                </div>
                                                <div className="multipleColumnResp">
                                                    <div className="postcode">
                                                        <label htmlFor="postcode">Postcode</label>
                                                        <Field className="field" name="Postcode" id="postcode" />
                                                        <div className="shortError"><ErrorMessage name="Postcode" component="span" /></div>
                                                    </div>
                                                    <div className="country">
                                                        <label htmlFor="country">Country</label>
                                                        <Field className="field" name="Country" id="country" /><br />
                                                        <div className="shortError"><ErrorMessage name="Country" component="span" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        <div>
                                            <button className="submitBtn" type="submit"><img className="paperPlaneSubmitImg" src="paper-plane.png" />Submit</button>
                                        </div>
                                    </Form>
                                    <Success />
                                    <Error />
                                </td>
                                <td className="contactUsImageContainer">
                                    <img src="Img_Contact.png" alt="Contact us" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </Formik>
        </div>
    )
}

export default ContactUs;