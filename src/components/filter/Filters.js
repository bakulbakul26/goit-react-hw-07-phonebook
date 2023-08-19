import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const searchFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});
