import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger';
import item from "./reducerContacts";
import filter from "./reducerFilter";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
}

const contacts = combineReducers({
    item,
    filter
})

const rootReducer = combineReducers({
    contacts
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({

    reducer: persistedReducer,
    middleware: [logger],
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store)


