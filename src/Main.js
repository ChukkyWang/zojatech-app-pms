import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Successful } from "./utils/ProtectedRoutes";
import {
  DASHBOARD,
  GENERAL,
  HOME,
  SETTINGS,
  SIGN_UP,
  SUCCESS,
} from "./utils/routes";

const Login = lazy(() => import("./Pages/Auth/Login"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const Success = lazy(() => import("./Pages/Auth/Success"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const DashboardHome = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Setting = lazy(() => import("./Pages/Dashboard/Settings"));
const System = lazy(() => import("./Pages/Dashboard/System"));
const General = lazy(() => import("./Pages/Dashboard/GeneralSetting"));

function Main() {
  return (
    <Suspense fallback={"Loading..."}>
      <Router>
        <Routes>
          <Route path={HOME} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route element={<Successful />}>
            <Route path={SUCCESS} element={<Success />} />
          </Route>
          <Route path={DASHBOARD} element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path={SETTINGS} element={<Setting />}>
              <Route index element={<System />} />
              <Route path={GENERAL} element={<General />} />
            </Route>
          </Route>
          <Route
            path={"*"}
            element={
              <>
                <h2>Page not Found</h2>
              </>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Main;
