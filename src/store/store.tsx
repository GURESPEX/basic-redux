import { configureStore } from "@reduxjs/toolkit";
import registerFormSlice from "@store/slice/registerFormSlice";

const store = configureStore({
  reducer: {
    registerForm: registerFormSlice, // Register Form State
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
