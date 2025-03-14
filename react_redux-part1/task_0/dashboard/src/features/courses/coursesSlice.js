// coursesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
  },
  reducers: {
    fetchCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { fetchCourses } = coursesSlice.actions;
export default coursesSlice.reducer;