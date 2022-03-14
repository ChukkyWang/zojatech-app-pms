import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Form,
  FullWidthButton,
  PasswordInputWithLabel,
  TextInputWithLabel,
} from "../../components/Form/FormProps";
import { DASHBOARD, SIGN_UP } from "../../utils/routes";

function Login() {
  const { watch, register, handleSubmit } = useForm({ mode: "all" });
  const navigate = useNavigate();
  const loginWithThisForm = () => {
    alert(JSON.stringify(watch(), null, 2));
    navigate(DASHBOARD);
  };

  return (
    <div className="auth_bg">
      <Form
        onSubmit={handleSubmit(loginWithThisForm)}
        heading={"Sign in to your Account"}
      >
        <TextInputWithLabel
          name={"Email Address"}
          camel={"email"}
          register={register}
          type={"email"}
        />

        <PasswordInputWithLabel
          name={"Password"}
          camel={"password"}
          register={register}
          type={"password"}
        />

        <div className="login_support">
          <div className="remember_me">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Forgot Password</p>
        </div>

        <FullWidthButton>Sign In</FullWidthButton>
        <div className="login_support">
          <p>
            Don't have an account? <Link to={SIGN_UP}>Sign Up</Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Login;
