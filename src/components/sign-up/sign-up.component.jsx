import React from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";
import { SignUpContainer } from "./sign-up.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUpAsync } from "../../store/user/user-action";
import { selectCartItems } from "../../store/cart/cart-select";

const initialFormFields = {
  name: "",
  email: "",
  password: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = React.useState(initialFormFields);
  const { name, email, password } = formFields;
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(fetchSignUpAsync(name, email, password));

    if (cartItems) {
      navigate("/checkout");
    } else {
      navigate("/shop");
    }
    resetFormFields();
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
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
