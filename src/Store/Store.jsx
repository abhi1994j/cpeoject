import { configureStore } from "@reduxjs/toolkit";
import { CourceDetRed } from "../Reducers/CourseDetRed";
import { CourseQueRed } from "../Reducers/CourseQueRed";
import { BlogArtRed } from "../Reducers/BlogReducer/BlogArtRed";
import { authRed } from "../Reducers/AuthRed";

export const Store = configureStore({
    reducer: {
        CourceDetRed,
        CourseQueRed,
        BlogArtRed,
        auth: authRed
    }
}
)