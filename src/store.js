import { configureStore } from "@reduxjs/toolkit";
import { firstReducer, secondReducer,bookmarkReducer, storeTags, loader } from "./reducer";

const store = configureStore({
    reducer: {
        first: firstReducer,
        second: secondReducer,
        third: bookmarkReducer,
        fourth: storeTags,
        fifth: loader
        // adding multiple reducers
    },
});

export default store;

