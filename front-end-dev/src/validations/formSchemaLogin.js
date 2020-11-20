import * as yup from "yup";

export default yup.object().shape({
    usernameLogin: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be 3 chars long"),
    passwordLogin: yup
        .string()
        .required('Password is required'),
    username: yup
        .string(),
    email: yup
        .string(),
    password: yup
        .string(),
    confirmPassword: yup
        .string(),
    role: yup
        .string(),
    availability: yup
        .boolean(),
    country: yup
        .string(),
});