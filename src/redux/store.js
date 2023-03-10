import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./NoteRedux";
import itemReducer from "./ItemSlice"
import { persistStore, persistReducer, FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE,REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    version:1,
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, itemReducer);
  export const store = configureStore({
    reducer:{
        item:persistedReducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE,REGISTER],
        },
    }),
  })

  export let persistor = persistStore(store)
