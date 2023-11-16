import { createAction } from "@reduxjs/toolkit";

export const createTransaction = createAction(
  "@set/login",
  (payload: { cardNumber: string; sum: string }) => ({
    payload,
  })
);
