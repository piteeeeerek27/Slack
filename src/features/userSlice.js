import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = counterSlice.actions;
export const selectCount = (state) => state.user.user;

export default counterSlice.reducer;
