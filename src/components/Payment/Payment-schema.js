import * as Yup from "yup";

const PaymentSchema = Yup.object().shape({
    // paymentMethod: Yup.string()
    // .required("The payment method is required"),
    cardholder: Yup.string()
    .min(2, "The card holder is too short!")
    .max(50, "The card holder is too long!")
    .required("The card holder is required"),
    cardNumber: Yup.number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(16)
    .required("A phone number is required"),
    expiryDate: Yup.date()
    .required("The expiry date is required"),
    cvvCode: Yup.number()
    .min(3)
    .required("The payment method is required"),
    consentCheckbox: Yup.string()
    .required("The payment method is required"),
});

export default PaymentSchema;
