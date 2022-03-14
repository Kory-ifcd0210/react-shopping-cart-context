/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Redirect, Link  } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid"


import Button from "../Button";
import Input from "../Input";

import PaymentContext from "../../Context/PaymentContext";
import PaymentSchema from "./Payment-schema";


function Payment() {

    const [hasSubmitted, setHasSubmitted] = useState(false);
    const { savePayment } = useContext(PaymentContext);

    const formik = useFormik({
        initialValues: {
            paymentMethod: "",
            cardholder: "",
            cardNumber: "",
            expiryDate: "",
            cvvCode: "",
            consentCheckbox: "",
        },

    validationSchema: PaymentSchema,
    onSubmit: (values, { setSubmitting }) => {
        const newPayment = { id: uuid(), ...values };
        savePayment(newPayment);
        setSubmitting(true);

        setTimeout(() => {
            setHasSubmitted(true);
        }, 500);
    },
});
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    type="radio"
                    label="paymentMethod"
                    id="paymentMethodCard"
                    value={formik.values.paymentMethod}
                    placeholder="paymentMethod"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.paymentMethod}
                    errorMessage={formik.errors.paymentMethod}
                    name="paymentMethod"
                />
                <Input
                    type="radio"
                    label="paymentMethod"
                    id="paymentMethodPaypal"
                    value={formik.values.paymentMethod}
                    placeholder="paymentMethod"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.paymentMethod}
                    errorMessage={formik.errors.paymentMethod}
                    name="paymentMethod"
                />
                <Input
                    type="radio"
                    label="paymentMethod"
                    id="paymentMethodIPay"
                    value={formik.values.paymentMethod}
                    placeholder="paymentMethod"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.paymentMethod}
                    errorMessage={formik.errors.paymentMethod}
                    name="paymentMethod"
                />
                <Input
                    type="text"
                    label="cardholder"
                    id="cardholder"
                    value={formik.values.cardholder}
                    placeholder="cardholder"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cardholder}
                    errorMessage={formik.errors.cardholder}
                />
                <Input
                    type="number"
                    label="cardNumber"
                    id="cardNumber"
                    value={formik.values.cardNumber}
                    placeholder="cardNumber number"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cardNumber}
                    errorMessage={formik.errors.cardNumber}
                />
                <Input
                    type="date"
                    label="expiryDate"
                    id="expiryDate"
                    value={formik.values.expiryDate}
                    placeholder="expiryDate number"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.expiryDate}
                    errorMessage={formik.errors.expiryDate}
                />
                <Input
                    type="number"
                    label="cvvCode"
                    id="cvvCode"
                    value={formik.values.cvvCode}
                    placeholder="cvvCode number"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cvvCode}
                    errorMessage={formik.errors.cvvCode}
                />
                <Input
                    type="checkbox"
                    label="consentCheckbox"
                    id="consentCheckbox"
                    value={formik.values.consentCheckbox}
                    placeholder="consentCheckbox number"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.consentCheckbox}
                    errorMessage={formik.errors.consentCheckbox}
                />
                <Button
                    submitButton
                    block
                    disabled={formik.isValidating || !formik.isValid}
                >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                <Link to="/checkout/step-2" className="btn btn-primary">Back</Link>
            </form>

            {hasSubmitted && <Redirect to="/checkout/order-summary" />}
        </>
    );
}

export default Payment;
