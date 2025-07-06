import { createSlice } from "@reduxjs/toolkit";
import Weather from "../../https/weatherHttps/weatherHttp";


const weatherSlice = createSlice({
    name:'weather',
    initialState:{
        data:null,
        headers:{}
    },
    redusers:{
            SET_WEATHER(state,action){
                state.data = action.payload.data;
                state.headers = action.payload.headers;
            },
    },
});

export const loadWeatherSlice = (key, city) => async (dispatch) => {
    try{
        const response = await Weather.weatherLinks(key, city);
        console.log(response,"respons");
        dispatch(SET_WEATHER({
            data: response.data,
            headers: {
                contentType: response.headers['content-type'],
            },
        }));
    }
    catch{
        console.log("Error Weather Data");
    }
};

export const {SET_WEATHER} = weatherSlice.actions;
export default weatherSlice.reducer;