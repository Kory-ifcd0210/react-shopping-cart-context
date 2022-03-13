import * as Yup from "yup";

const personalDetailSchema = Yup.object().shape({
  personName: Yup.string()
    .min(2, "The name is too short!")
    .required("The name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});

export default personalDetailSchema;
