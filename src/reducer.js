import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
    { quotes: {} },
    {
        randomquote: (state, action) => {
            state.quotes = action.payload;//passing the response from the url to the 'quotes' state through payload

        }
    })
export const secondReducer = createReducer(
    { count: 0 },
    {
        countInc: (state) => {
            state.count += 1;// to increase the count by one on the event of onClick on 'Next Quote' button  
        }
    });
export const bookmarkReducer = createReducer(
    { bookmark: [] },//initializing state that will contain all the bookmarked quotes
    {
        toBookmark: (state, action) => {
            state.bookmark.push(action.payload)//pushing the bookmaked quotes to the bookmark array
        }
    });