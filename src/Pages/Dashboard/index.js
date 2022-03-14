import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./Style/Style.css";
import Sidebar from "./Components/sidebar/sidebar";

function Dashboard() {
  return (
    <div className="dashboard">
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
