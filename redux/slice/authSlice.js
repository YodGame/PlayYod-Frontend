import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
    authState: false,
    usernameState: "",
    nameState: ""
};

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to set the authentication status
        setAuthState(state, action) {
            state.authState = action.payload;
        },
        setUsernameState(state, action) {
            state.usernameState = action.payload;
        },
        setNameState(state, action) {
            state.nameState = action.payload;
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
});

export const { setAuthState, setUsernameState, setNameState } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;
export const selectUsernameState = (state) => state.auth.usernameState;
export const selectNameState = (state) => state.auth.nameState;

export default authSlice.reducer;
