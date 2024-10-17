import axios from "axios";
import {
  reservationsFail,
  reservationsRequest,
  reservationsSuccess,
} from "../slices/reservationsSlice";
export const getReservations = async (dispatch, token, userName) => {
  try {
    dispatch(reservationsRequest());
    const { data } = await axios.get(`/api/v1/reservations/${userName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(reservationsSuccess(data));
  } catch (error) {
    dispatch(reservationsFail(error.response.data.message));
  }
};

export const getAllreservations = (token) => {
  return async (dispatch) => {
    try {
      dispatch(reservationsRequest());
      const { data } = await axios.get(`/api/v1/admin/reservations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(reservationsSuccess(data));
    } catch (error) {
      dispatch(
        reservationsFail(
          error.response ? error.response.data.message : error.message
        )
      );
    }
  };
};


// export const deleteReservation = async (dispatch, token, reservationId) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
    
//     const { data } = await axios.delete(`/api/reservations/${reservationId}`, config);

//     dispatch({
//       type: DELETE_RESERVATION_SUCCESS,
//       payload: reservationId,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_RESERVATION_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
