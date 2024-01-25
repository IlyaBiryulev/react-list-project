import { createSlice } from '@reduxjs/toolkit';

export interface pageState {
  pageNumber: number;
}

const initialState: pageState = {
  pageNumber: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state) => {
      state.pageNumber += 1;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
