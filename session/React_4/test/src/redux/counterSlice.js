import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// 초기값 설정
const initialState = {
    number: 0,
};

export const counterSlice = createSlice({
    //*나중에 또 가서 연결시켜줘야 하므로 export 시킬 것
    name: "counter", // slice 이름
    initialState, // 초기값
    // reducer 객체
    reducers: {
        // aciton과 reducer 로직
        initCounter: (state) => {
            //*얘네가 action이고 dispatch에 인자로 준다
            state.number = 0;
        },
        increase: (state) => {
            state.number++;
        },
        decrease: (state) => {
            state.number--;
        },
    },
    extraReducers: (builder) => {
        //*persist 작용할 수 있게 하는 거
        builder.addCase(PURGE, () => initialState);
    },
});

export const { initCounter, increase, decrease } = counterSlice.actions; //*export 무조건 해야함

export default counterSlice.reducer; //*얘도!! 묶으려면 나중에 해야함~~!!
