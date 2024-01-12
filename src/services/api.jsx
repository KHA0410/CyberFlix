import axios from "axios";

export const https = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn",
    headers: {
        TokenCybersoft : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODA2NDAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4MjExNjAwfQ.631rl3EwTQfz6CuufNTJlys36XLVmoxo29kP-F_PDKU"
    }
});

// Add a request interceptor
https.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request sent");
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
https.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response returned");
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });