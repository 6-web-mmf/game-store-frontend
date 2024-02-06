import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slices/gameSlice'
import commentSlice from './slices/commentSlice'
import { rememberReducer, rememberEnhancer } from "redux-remember"
import categorySlice from './slices/categorySlice'
<<<<<<< HEAD
import cartSlice from './slices/cartSlice'


const rememberedKeys = ['category', 'game', 'comment', 'cart']
=======


const rememberedKeys = ['category', 'game', 'comment']
>>>>>>> develop

export const store = configureStore({
    reducer: rememberReducer({
        game: gameSlice,
        comment: commentSlice,
<<<<<<< HEAD
        category: categorySlice,
        cart: cartSlice
=======
        category: categorySlice
>>>>>>> develop
    }),
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
})