import React, { useState } from "react";
import "./FormProps.css";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import LOGO from "../Assets/Images/logo.svg";

const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:])(?=.{8,})"
);

export function Form({ children, onSubmit, heading, support, styles }) {
  return (
    <form className="general_form" onSubmit={onSubmit}>
      <div className="heading">
        <img src={LOGO} alt="PMS Logo" />
        <h2 className="heading_lead">{heading}</h2>
        {support || styles ? (
          <p
            style={{ marginBottom: styles === "style" ? "15px" : "60px" }}
            className="support_heading"
          >
            {support}
          </p>
        ) : (
          ""
        )}
      </div>
      {children}
    </form>
  );
}

export function TextInputWithLabel({ name, register, camel, errors, type }) {
  return (
    <div className="form_reverse_column">
      <input
        name={camel}
        id={camel}
        type={type}
        className="form_width_input"
        placeholder={`Enter ${name}`}
        {...register(`${camel}`, {
          required: {
            value: true,
            message: `${name} is Required`,
          },
        })}
      />
      <label className="form_input_label" htmlFor={`${camel}`}>
        {name}
      </label>
    </div>
  );
}

export function PasswordInputWithLabel({ name, register, camel }) {
  const [reveal, setReveal] = useState(true);

  return (
    <div className="password-class">
      <div className="form_reverse_column">
        <input
          name={camel}
          id={camel}
          type={reveal ? "password" : "text"}
          className="form_width_input"
          placeholder={`Enter ${name}`}
          {...register(`${camel}`, {
            required: {
              value: true,
              message: `${name} is Required`,
            },
          })}
        />
        <label className="form_input_label" htmlFor={`${camel}`}>
          {name}
        </label>
      </div>
      <span className="reveal-password" onClick={() => setReveal(!reveal)}>
        {reveal ? <HiOutlineEye /> : <HiOutlineEyeOff />}
      </span>
    </div>
  );
}

export function ConfirmPasswordInputWithLabel({
  name,
  register,
  camel,
  password,
}) {
  const [reveal, setReveal] = useState(true);
  return (
    <div className="password-class">
      <div className="form_reverse_column">
        <input
          name={camel}
          id={camel}
          type={reveal ? "password" : "text"}
          className="form_width_input"
          placeholder={`Enter ${name}`}
          {...register(`${camel}`, {
            required: {
              value: true,
              message: `${name} is Required`,
            },
            validate: (value) =>
              value === password.current || "Passwords do not match",
          })}
        />
        <label className="form_input_label" htmlFor={`${camel}`}>
          {name}
        </label>
      </div>
      <span className="reveal-password" onClick={() => setReveal(!reveal)}>
        {reveal ? <HiOutlineEye /> : <HiOutlineEyeOff />}
      </span>
    </div>
  );
}

export function FullWidthButton({ children }) {
  return <button className="full_width_button">{children}</button>;
}
