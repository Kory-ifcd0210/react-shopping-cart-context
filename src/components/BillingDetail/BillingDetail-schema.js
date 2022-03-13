import * as Yup from "yup";

const billingDetailSchema = Yup.object().shape({
    address: Yup.string()
        .min(2, "The address is too short!")
        .max(50, "The address is too long!")
        .required("The address is required"),
    city: Yup.string()
        .min(2, "The city is too short!")
        .max(50, "The city is too long!")
        .required("The city is required"),
    postalCode: Yup.number()
        .integer("The postalCode must be an integer")
        .positive("The postalCode must be a positive number")
        .required("The postalCode is required"),
    country: Yup.string()
        .min(2, "The country is too short!")
        .max(50, "The country is too long!")
        .required("The country is required"),
});

export default billingDetailSchema;
