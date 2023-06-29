<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import counterSlice from "./counterSlice";

const initialState = {
    userID: "",
    userName: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        initUser: (state) => {
            state.userID = initialState.userID;
            state.userName = initialState.userName;
        },
        setUser: (state, action) => {
            state.userID = action.payload.userID;
            state.userName = action.payload.userName;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => initialState);
    },
=======
//userSlice
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// 초기값 설정
const initialState = {
  userID: "",
  userName: "",
};

export const userSlice = createSlice({
  name: "user", // slice 이름
  initialState, // 초기값
  // reducer 객체
  reducers: {
    // aciton과 reducer 로직
    initUser: (state) => {
      state.userID = initialState.userID;
      state.userName = initialState.userName;
    },
    setUser: (state, action) => {
      state.userID = action.payload.userID;
      state.userName = action.payload.userName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
});

export const { initUser, setUser } = userSlice.actions;

<<<<<<< HEAD
export default counterSlice.reducers;
=======
export default userSlice.reducer;
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
