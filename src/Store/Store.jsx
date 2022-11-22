import { configureStore } from "@reduxjs/toolkit";
import { CourceDetRed } from "../Reducers/CourseDetRed";
import { CourseQueRed } from "../Reducers/CourseQueRed";

export const Store=configureStore({
    reducer:{
        CourceDetRed,
        CourseQueRed
    }
}
)