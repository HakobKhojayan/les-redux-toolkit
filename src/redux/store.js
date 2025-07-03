import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import logger from "redux-logger";

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware();
//     }
// })


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        if(process.env.NODE_ENV === "development") {
            return getDefaultMiddleware().concat(logger)
        }
        return getDefaultMiddleware();
    }
})