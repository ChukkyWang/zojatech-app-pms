import api from "../api";
import { apiToken } from "./api-helpers";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + apiToken?.accessToken,
};

const authActions = () => {
  return {
    login: function (data) {
      return api.post(`user-login`, data);
    },
    create: function (data) {
     return api.post(`register`, data);
   },
  };
};

export const AuthServices = {
  authActions: authActions,
};
