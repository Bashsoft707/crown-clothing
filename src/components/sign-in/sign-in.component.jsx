import React from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignInAsync } from "../../store/user/user-action";
import { selectCartItems } from "../../store/cart/cart-select";

const initialFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = React.useState(initialFormFields);
  const { email, password } = formFields;
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const signInWithGoogle = async () => {
    const res = await fetch("http://localhost:5000/api/v1/auth/google", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "Access-Control-Allow-Credentials": true,
      },
    });
    console.log("response", res);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(fetchSignInAsync(email, password));

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
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
