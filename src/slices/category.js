import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import CategoryService from "../services/category.service";


export const getcategory = createAsyncThunk(
  "animal/getcategory",
  async ( thunkAPI) => {
    try {
      const data = await CategoryService.getCategory();
      return { animaldata: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState ={
    animal: ''
}

const categorySlice = createSlice({
  name: "animal",
  initialState,
  extraReducers: {
    [getcategory.fulfilled]: (state, action) => {
        console.log("vasanth", action.payload.animaldata)
      state.animal = action.payload.animaldata
      return state;
    },
    [getcategory.rejected]: (state, action) => {
      state.animal = action.payload.animaldata;
      return state;
    }
  },
});

const { reducer } = categorySlice;
export default reducer;