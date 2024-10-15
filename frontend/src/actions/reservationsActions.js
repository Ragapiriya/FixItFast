import axios from "axios";
import {
  reservationsFail,
  reservationsRequest,
  reservationsSuccess,
} from "../slices/reservationsSlice";
export const getReservations = async (dispatch) => {
  try {
    dispatch(reservationsRequest());
    const { data } = await axios.get(`/api/v1/reservations/wackyhackers`);
    dispatch(reservationsSuccess(data));
  } catch (error) {
    dispatch(reservationsFail(error.response.data.message));
  }
};

export const getAllreservations = async (dispatch) => {
  try {
    dispatch(reservationsRequest());
    const { data } = await axios.get(`/api/v1/admin/reservations`);
    dispatch(reservationsSuccess(data));
  } catch (error) {
    dispatch(reservationsFail(error.response.data.message));
  }
};
