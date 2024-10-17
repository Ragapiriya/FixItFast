import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN} //My Auth0 tenant name.
      clientId={process.env.REACT_APP_OIDC_CLIENT_ID} //unique identifier for my application
      scope="openid profile email"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: process.env.REACT_APP_AUDIENCE,
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>
);
