import React, { useState, useContext } from "react";
import { Redirect, Link  } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid"


import Button from "../Button";
import Input from "../Input";

import BillingDetailContext from "../../Context/BillingDatailContext";
import billingDetailSchema from "./BillingDetail-schema";


function BillingDetail() {
   
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const { saveBillingDetail, billingDetail } = useContext(BillingDetailContext);

    const formik = useFormik({
        initialValues: {
            address: billingDetail.address,
            city: billingDetail.city,
            postalCode: billingDetail.postalCode,
            country: billingDetail.country
        },

    validationSchema: billingDetailSchema,
    onSubmit: (values, { setSubmitting }) => {
        const newDetail = { id: uuid(), ...values };
        saveBillingDetail(newDetail);
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
                    type="text"
                    label="address"
                    id="address"
                    value={formik.values.address}
                    placeholder="name"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.address}
                    errorMessage={formik.errors.address}
                />
                <Input
                    type="text"
                    label="city"
                    id="city"
                    value={formik.values.city}
                    placeholder="city"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.city}
                    errorMessage={formik.errors.city}
                />
                <Input
                    type="number"
                    label="postalCode"
                    id="postalCode"
                    value={formik.values.postalCode}
                    placeholder="postalCode number"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.postalCode}
                    errorMessage={formik.errors.postalCode}
                />
                <Input
                    type="text"
                    label="country"
                    id="country"
                    value={formik.values.country}
                    placeholder="country number"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.country}
                    errorMessage={formik.errors.country}
                />
                <Button
                    submitButton
                    block
                    disabled={formik.isValidating || !formik.isValid}
                >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                <Link to="/checkout/step-1" className="btn btn-primary">Back</Link>
            </form>

            {hasSubmitted && <Redirect to="/checkout/step-3" />}
        </>
    );
}

export default BillingDetail;
