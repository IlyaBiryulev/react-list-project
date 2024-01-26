import { createSlice } from '@reduxjs/toolkit';

import { PageNum } from '../model/types';

const initialState: PageNum = {
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
