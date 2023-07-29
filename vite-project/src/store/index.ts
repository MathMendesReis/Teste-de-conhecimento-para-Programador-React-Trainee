import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from '../slices/albunsSlice'

export const store = configureStore({
  reducer: {
    albums: albumsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

