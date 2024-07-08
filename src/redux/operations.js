import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65b915dfb71048505a8a25ed.mockapi.io/';

export const getCars = createAsyncThunk('/getCars', async (_, thunkApi) => {
  try {
    const response = await axios.get('/adverts/advert');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
