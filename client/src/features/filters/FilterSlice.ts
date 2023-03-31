
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


interface FilterState {
    type: string;
  }
  
  const initialState: FilterState = {
    type: '',
  };
  
  const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setType: (state, action: PayloadAction<string>) => {
        state.type = action.payload;
      },
    },
  });
  
  export const { setType } = filterSlice.actions;
  export default filterSlice.reducer;
  