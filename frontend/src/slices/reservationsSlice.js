import { createSlice } from "@reduxjs/toolkit";

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
      reservations:[],
    loading: false,
  },
  reducers: {
    reservationsRequest(state, action) {
      return {
        loading: true,
      };
    },
    reservationsSuccess(state, action) {
      return {
        loading: false,
        reservations: action.payload.reservations,
        length: action.payload.reservations.length
      };
    },
    reservationsFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = reservationsSlice;

export const { reservationsRequest, reservationsSuccess, reservationsFail } =
  actions;

  export default reducer;
