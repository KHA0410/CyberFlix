import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice/userSlice";
import spinnerSlice from "./redux/spinnerSlice/spinnerSlice";
import seatSlice from "./redux/seatSlice/seatSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let store = configureStore({
  reducer: {
    userSlice,
    spinnerSlice,
    seatSlice
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

