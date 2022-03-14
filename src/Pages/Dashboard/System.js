import React from "react";
import { useForm } from "react-hook-form";
import { TextInputWithLabel } from "../../components/Form/FormProps";
import Layout from "./Layout";
import SETTING_LOGO from "../../components/Assets/Images/setting-logo.svg";

function SystemSettings() {
  const { watch, register, handleSubmit } = useForm({ mode: "all" });
  const loginWithThisForm = () => {
    alert(JSON.stringify(watch(), null, 2));
  };
  return (
      <div className="settings_page">
        <h3>System Settings</h3>
        <p>Organization Profile</p>
        <hr />
        <form
          onSubmit={handleSubmit(loginWithThisForm)}
          className="general_for"
        >
          <div className="logo_holder">
            <img src={SETTING_LOGO} alt="img" className="logo_placeholder" />
            <TextInputWithLabel
              name={"Organization Name*"}
              camel={"organizationName"}
              register={register}
              type={"text"}
            />
          </div>
          <hr />
          <h4>Organization Vision</h4>
          <TextInputWithLabel
            name={"Vision"}
            camel={"vision"}
            register={register}
            type={"text"}
          />
          <hr />
          <h4>Organization Address</h4>
          <TextInputWithLabel
            name={"Street"}
            camel={"street"}
            register={register}
            type={"text"}
          />
          <div className="address">
            <TextInputWithLabel
              name={"City"}
              camel={"city"}
              register={register}
              type={"text"}
            />
            <TextInputWithLabel
              name={"State"}
              camel={"state"}
              register={register}
              type={"text"}
            />
          </div>
          <div className="other_address">
            <TextInputWithLabel
              name={"Country"}
              camel={"country"}
              register={register}
              type={"text"}
            />
          </div>
          <hr />
          <button>Save</button>
        </form>
      </div>
  );
}

export default SystemSettings;
