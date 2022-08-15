import React from "react";
import { SignInForm } from "../../components/sign-in/sign-in.component";
import { SignUpForm } from "../../components/sign-up/sign-up.component";
import { AuthenticationContainer } from "./authentication.styles";

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignUpForm />
      <SignInForm />
    </AuthenticationContainer>
  );
};
