import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice/userSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

let store = configureStore({
  reducer: {
    userSlice,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

