import { configureStore } from "@reduxjs/toolkit";
import themeModalSlice from "./features/themeModalSlice";
import userSlice from "./features/userSlice";
import appStateSlice from "./features/appStateSlice";

const store = configureStore({
    reducer : {
        user : userSlice,
        themeMode : themeModalSlice,
        appState : appStateSlice
    }
})

export default store