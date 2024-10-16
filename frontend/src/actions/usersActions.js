import axios from "axios";
import { usersRequest, usersSuccess, usersFail } from "../slices/usersSlice";

export const getAllusers = async (dispatch) => {
  try {
    dispatch(usersRequest());
    const { data } = await axios.get(`/api/v1/admin/users`);
    dispatch(usersSuccess(data));
  } catch (error) {
    dispatch(usersFail(error.response.data.message));
  }
};

export const createNewUser = async(dispatch) =>{
  dispatch(user)
}
