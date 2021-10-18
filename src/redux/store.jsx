import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import contactsReducer, { filter } from './reducer'
import userReducer from 'components/login/slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import logger from "redux-logger";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}
const persistedReducer = persistReducer(persistConfig, userReducer)

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
]
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter,
    user: persistedReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)
export { store, persistor }
