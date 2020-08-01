import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import formReducer from "./formReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form', 'auth']
}

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer 
})

export default persistReducer(persistConfig, rootReducer);