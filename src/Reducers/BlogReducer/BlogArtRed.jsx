import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    artData: [],
    filteredData:[]
}

export const getArtData = createAsyncThunk('blog/blogArticle', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return await res.data;
})

const BlogArtSlice = createSlice({
    name: 'blogArticle',
    initialState,
    reducers: {
        blogSerchAct(state,action){
            state.filteredData=action.payload;
        }
    },
    extraReducers: {
        [getArtData.fulfilled]: (state,{payload}) => {
            state.artData=payload
        }
    }
})

export const {blogSerchAct}=BlogArtSlice.actions;
export const BlogArtRed=BlogArtSlice.reducer;