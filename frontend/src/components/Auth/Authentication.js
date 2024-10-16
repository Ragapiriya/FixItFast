import { useAuth0 } from "@auth0/auth0-react";
import { Fragment, useState } from "react";
import axios from "axios";

export default function Authentication() {
  const {
    loginWithPopup, 
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);
  const fetchUserInfo = async () => {
    try {
      //getting access token in frontend.
      const accessToken = await getAccessTokenSilently();
      //API call to get user info
      const response = await axios.get(
        "https://dev-qro8hjwxug8ea45c.us.auth0.com/userinfo",
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setUserInfo(data);
      sessionStorage.setItem("UserInfo", JSON.stringify(data));
    } catch (error) {
      console.log("Error fetching user information", error);
    }
  };
  function callAPI() {
    axios
      .get("http://localhost:8005/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }
  async function callProtectedAPI() {
    try {
      const token = await getAccessTokenSilently();
      console.log(token); //this access token is JWT token
      const res = await axios.get("http://localhost:8005/protected", {
        headers: {
          //sending the token in headers
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Fragment>
      <h1>Hi</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}>Login with Popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}>Login with Redirect</button>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>

      <ul>
        <li>
          <button onClick={callAPI}>Call API route</button>
        </li>
        <li>
          <button onClick={callProtectedAPI}>Call protected API route</button>
        </li>
      </ul>
      <h3>User is {isAuthenticated ? "logged in" : "not logged in"}</h3>
      {isAuthenticated && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </Fragment>
  );
}
