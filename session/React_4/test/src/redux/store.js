// store
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { counterSlice } from "./counterSlice";
import { userSlice } from "./userSlice";

const reducers = combineReducers({
<<<<<<< HEAD
    counter: counterSlice.reducer,
    user: userSlice.reducer,
=======
  counter: counterSlice.reducer,
  user: userSlice.reducer,
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
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
