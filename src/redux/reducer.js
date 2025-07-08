import { combineReducers } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice/weatherSlice";

export const rootReducer = combineReducers({
    weather: weatherSlice
})