import React from "react";
import axios from "axios";
import { FormInput } from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up.styles";

const initialFormFields = {
  name: "",
  email: "",
  password: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = React.useState(initialFormFields);
  const { name, email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFormFields();
    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      formFields
    );
    console.log(res)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <button type="submit">Sign Up</button>
      </form>
    </SignUpContainer>
  );
};
