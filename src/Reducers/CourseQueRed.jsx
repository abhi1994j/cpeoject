import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getApiData } from "../AxiosMethods/AxiosMethods"

const initialState = {
    queData: []
}

export const getQueData = createAsyncThunk('courses/courseQuestions', async () => {
    const res = await getApiData('courseQuestions');
    return res.data;
})

const CourseQueSlice = createSlice({
    name: 'courseQuestions',
    initialState,
    reducers: {},
    extraReducers: {
        [getQueData.fulfilled]: (state, { payload }) => {
            state.queData = payload
        }
    }
})

export const CourseQueRed = CourseQueSlice.reducer;
