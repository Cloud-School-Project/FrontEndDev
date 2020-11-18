import React, { useState, useEffect } from 'react';
import './LoginRegister.css';
import schemaRegistration from '../validation/formSchemaRegistration';
import schemaLogin from '../validation/formSchemaLogin';
import * as yup from 'yup';


const initialFormValues = {
    username: "",
    usernameLogin: "",
    email: "",
    password: "",
    passwordLogin: "",
    confirmPassword: "",
    role: "",
    availability: false,
    country: "",
    registering: false,
}
const initialFormErrors = {
    username: "",
    usernameLogin: "",
    email: "",
    password: "",
    passwordLogin: "",
    confirmPassword: "",
    role: "",
    availability: "",
    country: "",
};
const initialDisabled = true;


export default function LoginRegister() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);



    const inputChange = (name, value) => {
        let schema = formValues.registering ? schemaRegistration : schemaLogin;
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                });
            });
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        inputChange(name, correctValue);
    };

    const showRegistration = (evt) => {
        evt.preventDefault();
        setFormValues({
            ...formValues,
            registering: true,
        });
    }

    const showLogin = (evt) => {
        evt.preventDefault();
        setFormValues({
            ...formValues,
            registering: false,
        });
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        // submit();
        if (formValues.registering) {
            alert('Sorry, registration is temporarily unavailable');
        } else {
            alert('Sorry, login is temporarily unavailable');
        }
    };

    useEffect(() => {
        let schema = formValues.registering ? schemaRegistration : schemaLogin;
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    return (
        <div>
            <form id="loginRegisterForm" onSubmit={onSubmit}>
                <div style={formValues.registering ? { display: 'none' } : { display: '' }}>
                    <div id="loginErrorsContainer">
                        <div>{formErrors.usernameLogin}</div>
                        <div>{formErrors.passwordLogin}</div>
                    </div>
                    <div id="loginInputContainer">
                        <input
                            value={formValues.usernameLogin}
                            name="usernameLogin"
                            onChange={onChange}
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            value={formValues.passwordLogin}
                            name="passwordLogin"
                            onChange={onChange}
                            type="password"
                            placeholder="Password"
                        />
                        <button type='submit' disabled={disabled}>Login</button>
                        <button onClick={showRegistration}>Register</button>
                    </div>
                </div>
                <div style={formValues.registering ? { display: '' } : { display: 'none' }}>
                    <div id="registerErrorsContainer">
                        <div>{formErrors.username}</div>
                        <div>{formErrors.email}</div>
                        <div>{formErrors.password}</div>
                        <div>{formErrors.confirmPassword}</div>
                        <div>{formErrors.role}</div>
                        <div>{formErrors.availability}</div>
                        <div>{formErrors.country}</div>
                    </div>
                    <div id="registerInputContainer">
                        <input
                            value={formValues.username}
                            name="username"
                            onChange={onChange}
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            value={formValues.email}
                            name="email"
                            onChange={onChange}
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            value={formValues.password}
                            name="password"
                            onChange={onChange}
                            type="password"
                            placeholder="Enter Password"
                        />
                        <input
                            value={formValues.confirmPassword}
                            name="confirmPassword"
                            onChange={onChange}
                            type="password"
                            placeholder="Confirm Password"
                        />
                        <div id="roleSelect">
                            <div>
                                Role
                            </div>
                            <select value={formValues.role} name="role" onChange={onChange}>
                                <option value="">- Select an option -</option>
                                <option value="admin">Admin</option>
                                <option value="student">Student</option>
                                <option value="volunteer">Volunteer</option>
                            </select>
                        </div>
                        <div id="availabilityCheckboxList">
                            <div>
                                Availability
                            </div>
                            <div id="dayCheckboxes">
                                <label>
                                    <input
                                        name="availability"
                                        value="sunday"
                                        type="checkbox"
                                        onChange={onChange}
                                    />
                                    Sunday
                                </label>
                                <label>
                                    <input
                                        name="availability"
                                        value="monday"
                                        type="checkbox"
                                        onChange={onChange}
                                    />
                                    Monday
                                </label>
                                <label>

                                    <input
                                        name="availability"
                                        value="tuesday"
                                        type="checkbox"
                                        onChange={onChange}
                                    />
                                    Tuesday
                                </label>
                                <label>

                                    <input
                                        name="availability"
                                        value="wednesday"
                                        type="checkbox"
                                        onChange={onChange}
                                    />
                                    Wednesday
                                </label>
                                <label>

                                    <input
                                        name="availability"
                                        value="thursday"
                                        type="checkbox"
                                        onChange={onChange}
                                    />
                                    Thursday
                                </label>
                                <label>

                                    <input
                                        name="availability"
                                        value="friday"
                                        type="checkbox"
                                        onChange={onChange}
                                    />
                                    Friday
                                </label>
                                <label>

                                    <input
                                        name="availability"
                                        value="saturday"
                                        type="checkbox"
                                        onChange={onChange}
                                    />
                                    Saturday
                                </label>

                            </div>
                        </div>
                        <div id="countryInputContainer">
                            <input
                                value={formValues.country}
                                name="country"
                                onChange={onChange}
                                type="text"
                                placeholder="Enter Country"
                            />
                        </div>
                        <button type='submit' disabled={disabled}>Register</button>
                        <button onClick={showLogin}>Already A Member ? Sign In Now..</button>
                    </div>
                </div>
            </form>
        </div>
    )
}