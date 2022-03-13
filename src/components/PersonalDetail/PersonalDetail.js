import React, {useState, useContext} from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";

import Button from "../Button";
import Input from "../Input";

import PersonDataContext from "../../Context/PersonDataContext";
import personalDetailSchema from "./PersonaDetail-schema";


function PersonalDetail() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { savePersonData, data } = useContext(PersonDataContext)

  const formik = useFormik({
    initialValues: {
      personName: data.personName,
      email: data.email,
      phone: data.phone,
    },

    validationSchema: personalDetailSchema,
    onSubmit: (values, { setSubmitting }) => {
      const newData = { id: uuid(), ...values };
      savePersonData(newData);
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
          label="name"
          id="personName"
          value={formik.values.personName}
          placeholder="name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.personName}
          errorMessage={formik.errors.personName}
        />
        <Input
          type="email"
          label="email"
          id="email"
          value={formik.values.email}
          placeholder="email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="tel"
          label="phone"
          id="phone"
          value={formik.values.phone}
          placeholder="phone number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.phone}
          errorMessage={formik.errors.phone}
        />
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {hasSubmitted && <Redirect to="/checkout/step-2" />}
    </>
  );
}

export default PersonalDetail;
