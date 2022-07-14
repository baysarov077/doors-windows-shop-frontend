import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signinUp: false,
  signinIn: false,
  users: null,
  token: localStorage.getItem("token"),
};

export const auth = createAsyncThunk(
  "login/user",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
        const data = await res.json();
        if(data.token){
          localStorage.setItem("token", data.token);
        }
        return thunkAPI.fulfillWithValue(data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error + 'auth');
    }
  }
);

export const getUser = createAsyncThunk("get/user", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    const res = await fetch("http://localhost:4000/users", {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    });
      const user = await res.json();   
      return thunkAPI.fulfillWithValue(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error + 'getUser');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(auth.fulfilled, (state, action) => {
        state.token = action.payload
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload
    })
      
  }
})

export default usersSlice.reducer