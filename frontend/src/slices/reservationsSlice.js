import { createSlice } from "@reduxjs/toolkit";

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    reservations: [],
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
        length: action.payload.reservations.length,
      };
    },
    reservationsFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    deleteReservationRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    deleteReservationSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isProductDeleted: true,
      };
    },
    deleteReservationFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearReservationDeleted(state, action) {
      return {
        ...state,
        isProductDeleted: false,
      };
    },
  },
});

const { actions, reducer } = reservationsSlice;

export const {
  reservationsRequest,
  reservationsSuccess,
  reservationsFail,
  deleteReservationRequest,
  deleteReservationSuccess,
  deleteReservationFail,
  clearReservationDeleted,
} = actions;

export default reducer;
