import { configureStore } from "@reduxjs/toolkit";
import { firstReducer, secondReducer,bookmarkReducer } from "./reducer";

const store = configureStore({
    reducer: {
        first: firstReducer,
        second: secondReducer,
        third: bookmarkReducer
        // adding multiple reducers
    },
});

export default store;

