import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { counterSlice } from "./counterSlice";
import { userSlice } from "./userSlice";

const reducers = combineReducers({
    counter: counterSlice.reducer,
    user: userSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage, //로컬스토리지에 값 저장한다는 뜻
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
});
