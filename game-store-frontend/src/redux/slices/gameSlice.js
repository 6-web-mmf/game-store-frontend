import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../axios'

export const getAllGames = createAsyncThunk(
    'game/getAllGames',
    async (q = '') => {
        const response = await instance.get('/games?q=' + q)
        return response.data
    }
)

export const getGameById = createAsyncThunk(
    'games/getGameById',
    async (id) => {
        const response = await instance.get('/games/' + id)
        return response.data
    }
)

const initialState = {
    games: [],
    game: null,
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
            // getAllGames
            .addCase(getAllGames.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(getAllGames.fulfilled, (state, action) => {
                state.games = action.payload
                state.loading = false
            })
            // getGameById
            .addCase(getGameById.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getGameById.fulfilled, (state, action) => {
                state.loading = false
                state.game = action.payload
            })
            // errors handler
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default gameSlice.reducer