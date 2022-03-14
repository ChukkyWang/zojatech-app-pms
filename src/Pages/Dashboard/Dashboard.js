import React from "react";
import Layout from "./Layout";
import DUMMY from "../../components/Assets/Images/bulb.svg";
import { useNavigate } from "react-router-dom";
import { SETTINGS } from "../../utils/routes";

function DashboardHome() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="alert">
        <img src={DUMMY} alt="/" className="alert_img" />
        <div className="alert_note">
          <h3>
            PMS is very simple, Zojatech Ltd. Complete your organization
            profile.
          </h3>
          <button onClick={() => navigate(SETTINGS)}>
            <span>Complete Profile</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardHome;
