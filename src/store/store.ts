import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product'

const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
})

export default store
