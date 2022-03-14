import React from "react";
import { useForm } from "react-hook-form";
import { TextInputWithLabel } from "../../components/Form/FormProps";
import Layout from "./Layout";
import SETTING_LOGO from "../../components/Assets/Images/setting-logo.svg";
import { Outlet } from "react-router-dom";

function Settings() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Settings;
