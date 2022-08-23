import React from "react";
import axios from "axios";
import { FormInput } from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";

const initialFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = React.useState(initialFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      formFields
    );
    console.log(res);
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <button type="submit">Sign In</button>
          <button type="button">Sign In With Google</button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
