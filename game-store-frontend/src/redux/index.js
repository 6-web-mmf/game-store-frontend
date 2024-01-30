import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slices/gameSlice'
import commentSlice from './slices/commentSlice'
import { rememberReducer, rememberEnhancer } from "redux-remember"
import categorySlice from './slices/categorySlice'


const rememberedKeys = ['category', 'game', 'comment']

export const store = configureStore({
    reducer: rememberReducer({
        game: gameSlice,
        comment: commentSlice,
        category: categorySlice
    }),
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
})