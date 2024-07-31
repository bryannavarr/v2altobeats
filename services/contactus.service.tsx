import axios from "axios";
import {success, error} from '../responses'

const headers = { "Content-Type": "application/json" };

// let endpoint = "http://localhost:5001";
let endpoint = "https://server.altobeats.com";

export const sendMessage = (data: any) => {
  const config = {
    method: "POST",
    headers,
    data: data
  };
  return axios(`${endpoint}/api/contact-us`, config).then(success).catch(error)

};
