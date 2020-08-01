import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from 'redux-persist';
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);