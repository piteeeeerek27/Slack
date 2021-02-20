import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import mailReducer from "../features/mailSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		mail: mailReducer,
	},
});
