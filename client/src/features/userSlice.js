import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {appApi} from "../appApi";

const initialState=null;

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        logout: () => initialState,
        addNotification: (state, action) => {
            state.notifications.unshift(action.payload);
        },
        resetNotifications: (state) => {
            state.notifications.forEach((obj) => {
                obj.status = "read";
            });
        },

    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, { payload }) => payload);
    },
});

export const { logout, addNotification, resetNotifications } = userSlice.actions;


export default userSlice.reducer;