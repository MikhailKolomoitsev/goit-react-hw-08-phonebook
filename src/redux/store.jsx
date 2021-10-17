import { configureStore } from '@reduxjs/toolkit'
import contactsReducer, { filter } from './reducer'
import userReducer from 'components/login/slice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["name", "email", "token"],
};
const persistedReducer = persistReducer(persistConfig, userReducer);

 const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter,
     user: persistedReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
   devTools: process.env.NODE_ENV === "development",
})

const persistor = persistStore(store);
export { store, persistor };