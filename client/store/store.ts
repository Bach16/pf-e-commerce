import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../src/features/filters/FilterSlice"

const store = configureStore({
        reducer:{
            filter: filterReducer 
        }
    });


export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;