import axios from "axios";

const headers = { "Content-Type": "application/json" };

// let endpoint = "http://localhost:5000";
let endpoint = "https://server.altobeats.com";

export const subscribe = (email: string) => {
  let data = {
    email:email
  }
  const config = {
    method: "POST",
    headers,
    data: data,
  };
  return axios(`${endpoint}/api/subscribe`, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

const responseSuccessHandler = (response: any) => {
  return response.data;
};

const responseErrorHandler = (error: any) => {
  console.log(error);
  return Promise.reject(error);
};
