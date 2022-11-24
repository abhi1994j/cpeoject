import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    artData: [],
    filteredData:[]
}

export const getArtData = createAsyncThunk('blog/blogArticle', async () => {
    const res = await axios.get('http://127.0.0.1:3004/blogArticle');
    return await res.data;
})

const BlogArtSlice = createSlice({
    name: 'blogArticle',
    initialState,
    reducers: {
        filteredAction(state,action){
            state.filteredData=action.payload;
        }
    },
    extraReducers: {
        [getArtData.fulfilled]: (state,{payload}) => {
            state.artData=payload
        }
    }
})

export const {filteredAction}=BlogArtSlice.actions;
export const BlogArtRed=BlogArtSlice.reducer;