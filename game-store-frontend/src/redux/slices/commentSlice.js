import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getAllComments = createAsyncThunk(
    'comment/getAllComments',
    async (gameId) => {
        const response = await instance.get('/comments?gameId=' + gameId)
        return response.data
    }
)

export const getCommentById = createAsyncThunk(
    'comment/getCommentById',
    async (id) => {
        const response = await instance.get('/comment/' + id)
        return response.data
    }
)

const isError = (action) => {
    return action.type.endsWith('rejected')
}

const initialState = {
    loading: false,
    error: null,
    comment: null,
    comments: []
}

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // getAllComments
            .addCase(getAllComments.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getAllComments.fulfilled, (state, action) => {
                state.loading = false
                state.comments = action.payload
            })
            // getCommentById
            .addCase(getCommentById.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getCommentById.fulfilled, (state, action) => {
                state.loading = false
                state.comment = action.payload
            })
            // errors handler
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default commentSlice.reducer