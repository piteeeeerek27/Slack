import { createSlice } from "@reduxjs/toolkit";

export const channelSlice = createSlice({
	name: "channel",
	initialState: {
		channelId: null,
	},
	reducers: {
		goInRoom: (state, action) => {
			state.channelId = action.payload.channelId;
		},
	},
});

export const { goInRoom } = channelSlice.actions;

export const selectChannelId = (state) => state.channel.channelId;

export default channelSlice.reducer;
