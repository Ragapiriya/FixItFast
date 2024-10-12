import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qro8hjwxug8ea45c.us.auth0.com"
      clientId="C82akf9epA77n5ZsDbLnNSdGXz0NaACu"
      scope="openid profile email"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "FixItFast API",
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
