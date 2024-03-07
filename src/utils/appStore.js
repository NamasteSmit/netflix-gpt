import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import userSlice from "./userSlice";

const appStore = configureStore(
    {
        reducer : {
            user : userSlice,
        }
    }
)

export default appStore;