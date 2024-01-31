import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slices/gameSlice'
import commentSlice from './slices/commentSlice'
import { rememberReducer, rememberEnhancer } from "redux-remember"
import categorySlice from './slices/categorySlice'
import cartSlice from './slices/cartSlice'


const rememberedKeys = ['category', 'game', 'comment', 'cart']

export const store = configureStore({
    reducer: rememberReducer({
        game: gameSlice,
        comment: commentSlice,
        category: categorySlice,
        cart: cartSlice
    }),
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
})