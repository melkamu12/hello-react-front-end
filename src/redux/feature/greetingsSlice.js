import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessage = createAsyncThunk(
  'message/fetchMessage',
  async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/v1/greetings/random/',
      );
      return response.data;
    } catch (error) {
      throw new Error('Featching greeting message error!!!');
    }
  },
);

const initialState = {
  Loading: false,
  messages: {},
  error: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => ({
        ...state,
        Loading: true,
      }))
      .addCase(fetchMessage.fulfilled, (state, action) => ({
        ...state,
        Loading: false,
        messages: action.payload,
      }))
      .addCase(fetchMessage.rejected, (state, action) => ({
        ...state,
        Loading: false,
        error: action.error.message,
      }));
  },
});

export default greetingSlice.reducer;
