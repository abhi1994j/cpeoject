import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    user: [],
    token: false
}

export const getLoginData = createAsyncThunk('authentication/login', async () => {
    const res = await axios.get('http://127.0.0.1:3003/loginData')
    return await res.data;
})

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setToken(state, {payload}) {
            state.token = payload;
        }
    },
    extraReducers: {
        [getLoginData.fulfilled]: (state, { payload }) => {
            state.user = payload;
        }
    }
})

export const { setToken } = authSlice.actions;
export const authRed = authSlice.reducer;