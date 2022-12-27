import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  is_dark_mode: false,
};

export const theme__Slice = createSlice({
  name: 'theme_state',
  initialState,
  reducers: {
    set_theme_mode: (state, action: PayloadAction<boolean>) => {
      state.is_dark_mode = action.payload;
      localStorage.setItem('theme', JSON.stringify(action.payload));
    },
  },
});

export const { set_theme_mode } = theme__Slice.actions;
export default theme__Slice.reducer;
