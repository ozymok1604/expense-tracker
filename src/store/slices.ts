import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardNumber: "",
  sum: "",
};

const someSlice = createSlice({
  name: "someSlice",
  initialState,
  reducers: {
    createTransactionAction: (state, { payload }) => {
      state.cardNumber = payload.cardNumber;
      state.sum = payload.sum;
      return state;
    },

    reset: (state) => initialState,
  },
});

export const slices = someSlice.actions;
const someReducer = someSlice.reducer;
export default someReducer;
