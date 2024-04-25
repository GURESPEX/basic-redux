import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  value: {
    username: string;
    email: string;
    password: string;
  };
}

// Initial State
const initialState: IState = {
  value: {
    username: "",
    email: "",
    password: "",
  },
};

export const registerFormSlice = createSlice({
  name: "registerFormasda",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.value = { ...state.value, username: action.payload };
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.value = { ...state.value, email: action.payload };
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.value = { ...state.value, password: action.payload };
    },
  },
});

export const { setUsername, setEmail, setPassword } = registerFormSlice.actions; // To change value

export default registerFormSlice.reducer; // Export to configure in store
