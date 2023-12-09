import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {appApi} from "../appApi";

const initialState=null;

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    
    },
    // extraReducers: (builder) => {
    //     builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, { payload }) => payload);
    // },
});

// export const {  } = productSlice.actions;


export default productSlice.reducer;