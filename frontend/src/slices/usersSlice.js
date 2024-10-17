import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    usersRequest(state, action) {
      return {
        loading: true,
      };
    },
    usersSuccess(state, action) {
      return {
        loading: false,
        users: action.payload.users,
      };
    },
    usersFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = usersSlice;

export const { usersRequest, usersSuccess, usersFail } = actions;

export default reducer;
