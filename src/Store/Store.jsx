import { configureStore } from "@reduxjs/toolkit";

import { CourceDetRed } from "../Reducers/CourseDetRed";
import { CourseQueRed } from "../Reducers/CourseQueRed";

import { BlogArtRed } from "../Reducers/BlogReducer/BlogArtRed";

export const Store=configureStore({
    reducer:{
        CourceDetRed,
        CourseQueRed,
        BlogArtRed
    }
}
)