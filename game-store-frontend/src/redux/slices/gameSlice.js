import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../axios'

export const getAllGames = createAsyncThunk('game/getAllGames', async (q = '') => {
    const response = await instance.get('/games?q=' + q)
    return response.data
})


const initialState = {
    games: [],
    error: null,
    loading: false
}

const isError = (action) => {
    return action.type.endsWith('rejected')
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllGames.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(getAllGames.fulfilled, (state, action) => {
                state.games = action.payload
                state.loading = false
            })
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default gameSlice.reducer