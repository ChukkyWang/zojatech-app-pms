import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  ConfirmPasswordInputWithLabel,
  PasswordInputWithLabel,
  TextInputWithLabel,
} from "../../components/Form/FormProps";
import ICON from "../../components/Assets/Images/icon.svg";
import Layout from "./Layout";
import SETTING_LOGO from "../../components/Assets/Images/setting-logo.svg";
import { Link, useLocation } from "react-router-dom";

function GeneralSettings() {
  const location = useLocation().search;
  return (
    <div className="settings_page">
      <h3>General Settings</h3>
      <div className="navs">
        <span
          className={
            location.includes("?security") || location === ""
              ? "nav_active"
              : "nav_not_active"
          }
        >
          <Link to={"?security"}>Security</Link>
        </span>{" "}
        <span
          className={
            location.includes("?personal") ? "nav_active" : "nav_not_active"
          }
        >
          <Link to={"?personal"}>Personal Settings</Link>
        </span>
      </div>
      <hr />
      {(location.includes("?security") || location === "") && <Security />}
      {location.includes("?personal") && <Personal />}
    </div>
  );
}

export default GeneralSettings;

function Security(params) {
  const { watch, register, handleSubmit } = useForm({ mode: "all" });
  const loginWithThisForm = () => {
    alert(JSON.stringify(watch(), null, 2));
  };

  const changePassword = useRef({});
  changePassword.current = watch("newPassword", "");
  return (
    <form onSubmit={handleSubmit(loginWithThisForm)} className="general_for">
      <div>
        <PasswordInputWithLabel
          name={"Current Password"}
          camel={"currentPassword"}
          register={register}
          type={"password"}
        />
        <PasswordInputWithLabel
          name={"New Password"}
          camel={"newPassword"}
          register={register}
          type={"password"}
        />
        <ConfirmPasswordInputWithLabel
          name={"Confirm Password"}
          camel={"confirmPassword"}
          register={register}
          type={"password"}
          password={changePassword}
        />
      </div>
      <div className="button_password">
        <button type="submit">Update</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
}

function Personal(params) {
  return (
    <div className="alert personal_alert">
      <img src={ICON} alt="/" className="alert_img" />
      <div className="name_contact">
        <h3>John Doe</h3>
        <small>jdoe@test.com</small>
      </div>
      <button>Active</button>
    </div>
  );
}
