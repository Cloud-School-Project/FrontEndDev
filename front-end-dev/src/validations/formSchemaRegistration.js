import * as yup from "yup";

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be 3 chars long"),
    email: yup
        .string()
        .email("Must be valid email address")
        .required("Must include email address"),
    password: yup
        .string()
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .required('Confirmation Password is required'),
    role: yup
        .string()
        .oneOf(["admin", "student", "volunteer"], "Role is required"),
    availability: yup
        .boolean()
        .oneOf([true], 'Must at least choose one day for availability')
        .required(),
    country: yup
        .string()
        .required("Country is required")
        .min(4, "Country must be 4 characters or longer"),
    usernameLogin: yup
        .string(),
    passwordLogin: yup
        .string(),
});