import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { SIGN_UP } from "./routes";


export const Successful = () => {
  const location = useLocation().state;

  return location ? <Outlet /> : <Navigate to={SIGN_UP} />;
};
