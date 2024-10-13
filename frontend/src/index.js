import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qro8hjwxug8ea45c.us.auth0.com" //My Auth0 tenant name.
      clientId="C82akf9epA77n5ZsDbLnNSdGXz0NaACu" //unique identifier for your application
      scope="openid profile email"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "FixItFast API",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
