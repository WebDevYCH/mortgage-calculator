import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleWare = [];

const persistConfig = {
  key: "data",
  storage: storage,
  whitelist: ["idData"],
};

const pReducer = persistReducer(persistConfig, reducers);

middleWare.push(thunk);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === "development",
});

middleWare.push(loggerMiddleware);

export const store = createStore(
  pReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);
