import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getToken } from "./AuthService";
import axios from "axios";
import { store, persistor } from "./redux/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
