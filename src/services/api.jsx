import axios from "axios";
import { store } from "..";
import {
  setLoadingOff,
  setLoadingOn,
} from "../redux/spinnerSlice/spinnerSlice";

export const https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjE2LzA2LzIxMDAiLCJIZXRIYW5UaW1lIjoiMTcxODQ5NjAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4NjQzNjAwfQ.nxKt-C-T3PtIxGCb0bAxvC-QEsYFLkZN1s3RQqW86Wc",
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(setLoadingOn());
    console.log("request sent");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoadingOff());
    console.log("response returned");
    return response;
  },
  function (error) {
    store.dispatch(setLoadingOff());
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
