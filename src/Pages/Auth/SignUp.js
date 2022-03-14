import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  ConfirmPasswordInputWithLabel,
  Form,
  FullWidthButton,
  PasswordInputWithLabel,
  TextInputWithLabel,
} from "../../components/Form/FormProps";
import { HOME, SUCCESS } from "../../utils/routes";

function SignUp() {
  const { watch, register, handleSubmit } = useForm({ mode: "all" });
  const response = useSelector((state) => state.auth);
  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const loginWithThisForm = () => {
    alert(JSON.stringify(watch(), null, 2));
    navigate(SUCCESS, { state: "success" });
    // dispatch(createUser(watch()));
  };

  response && Navigate(SUCCESS);

  return (
    <div className="auth_bg">
      <Form
        onSubmit={handleSubmit(loginWithThisForm)}
        heading={"Create your Organization"}
      >
        <TextInputWithLabel
          name={"Organization Name"}
          camel={"name"}
          register={register}
          type={"text"}
        />

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

        <ConfirmPasswordInputWithLabel
          name={"Confirm Password"}
          camel={"password_confirmation"}
          register={register}
          type={"password"}
          password={password}
        />

        <FullWidthButton>Register</FullWidthButton>
        <div className="login_support">
          <p>
            Already have an account? <Link to={HOME}>Sign In</Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
