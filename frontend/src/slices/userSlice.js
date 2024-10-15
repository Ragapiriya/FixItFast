import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:user,
    initialState:{
            user:{}
    },
    reducers:{
        userSuccess(state,action){
            return {
                ...state,
                user:action.payload.user
            }
        }
    }
})