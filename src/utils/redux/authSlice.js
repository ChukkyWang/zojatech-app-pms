import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AuthServices } from "./services";
import { DASHBOARD, SUCCESS } from "../routes";
import { Navigate, useNavigate } from "react-router-dom";

export const loginUser = createAsyncThunk(
  "ls/loginUser",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await AuthServices.authActions().login(payload);
      Navigate(DASHBOARD);
      return response.data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const createUser = createAsyncThunk(
  "ls/createUser",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    console.log(payload);
    const navigate = useNavigate();
    try {
      const response = await AuthServices.authActions().create(payload);
      console.log(response);
      navigate(SUCCESS);
      return response.data;
    } catch (error) {
      window.location.replace(8);
      console.log(error);
      return error?.response;
    }
  }
);

const initialState = {
  auth: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      return { ...state, loginResponse: action.payload, loading: false };
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      return { ...state, registerResponse: action.payload, loading: false };
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
