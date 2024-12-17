import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    token: null,
    userData: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { userId, accessToken, userData } = action.payload;
      state.userId = userId;
      state.token = accessToken;
      state.userData = userData;
    },
    logOut: (state) => {
      state.userId = null;
      state.token = null;
      state.userData = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.userId;
export const selectCurrentToken = (state) => state.auth.token;
export const selectUserData = (state) => state.auth.userData?.data;
