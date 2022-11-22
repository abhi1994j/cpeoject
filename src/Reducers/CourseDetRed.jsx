import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiData } from "../AxiosMethods/AxiosMethods";

const initialState = {
    detailsData: []
}

export const getDetailsData = createAsyncThunk('course/courseDetails', async () => {
    const res = await getApiData('courseDetails');
    return res.data;
})

const CourseDetSlice = createSlice({
    name: 'courseDetails',
    initialState,
    reducers: {},
    extraReducers: {
        [getDetailsData.fulfilled]: (state, { payload }) => {
            state.detailsData = payload
        }
    }
})

export const CourceDetRed=CourseDetSlice.reducer;