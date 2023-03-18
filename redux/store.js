import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
        },
        devTools: process.env.NODE_ENV !== "production",
    });

export const wrapper = createWrapper(makeStore);
