import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    error: null,
    loading: false
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {}
})

export default gameSlice.reducer