import axios from "axios";
import { API_KEY } from "../config/api.js";

const client = axios.create({
	baseURL: "https://restcountries.com/v2/name/",
});

export const weatherClient = axios.create({
	baseURL: `http://api.weatherstack.com/current?access_key=22a25a4327bab0eac61ecef4d951a1bc&query=`,
});

export default client;
