import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getAllCategories = createAsyncThunk(
    'category/getAllCategories',
    async () => {
        const response = await instance.get('/categories')
        return response.data
    }
)

export const getCategoryById = createAsyncThunk(
    'category/getCategoryById',
    async (id) => {
        const response = await instance.get('/categories/' + id)
        return response.data
    }
)

const isError = (action) => {
    return action.type.endsWith('rejected')
}

const initialState = {
    error: null,
    loading: false,
    category: null,
    categories: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // getAllCategories
            .addCase(getAllCategories.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload
            })
            // getCategoryById
            .addCase(getCategoryById.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(getCategoryById.fulfilled, (state, action) => {
                state.loading = false
                state.category = action.payload
            })
            // errors handler
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default categorySlice.reducer