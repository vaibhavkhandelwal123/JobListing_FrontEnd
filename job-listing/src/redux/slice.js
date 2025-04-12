import { createSlice } from '@reduxjs/toolkit';
import Data from '../data'
const initialState= Data

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
    },
});

export const { } = jobSlice.actions;
export default jobSlice.reducer;
