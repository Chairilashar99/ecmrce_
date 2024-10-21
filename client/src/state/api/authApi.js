import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const config = {
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};

export const loginUser = createAsyncThunk(
	"user/login",
	async (userData, thunkApi) => {
		try {
			const { data } = await axios.post("/user/login", userData, config);

			return data.user;
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data.message);
		}
	}
);

export const loadUser = createAsyncThunk(
	"/user/loadUser",
	async (_, thunkApi) => {
		try {
			const { data } = await axios.get("/user/profile", config);

			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data.message);
		}
	}
);
