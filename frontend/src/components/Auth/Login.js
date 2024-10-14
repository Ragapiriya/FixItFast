import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  // let navigate = useNavigate();

  const fetchUserInfo = async () => {
    try {
      //getting access token in frontend.
      const accessToken = await getAccessTokenSilently();
      //API call to end point to get user information
      console.log(accessToken)
      const response = await axios.get(
        "https://dev-qro8hjwxug8ea45c.us.auth0.com/userinfo",
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const userData = await response.data;
      sessionStorage.setItem("userInfo", JSON.stringify(userData));
      console.log("Data extracted from endpoint",userData)
    } catch (error) {
      console.log("Error fetching user information", error);
    }
  };

  const handleLogin = async () => {
    await loginWithRedirect();
    // navigate('/profile');
  }
  useEffect(() => {
    if (isAuthenticated) {
      fetchUserInfo(); // fetching  user info once authenticated 
    }
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <li className="nav-item">
            <button className="spc-btn" onClick={logout}>
              Logout
            </button>
          </li>
          <li className="nav-item">
            <button className="btn" >
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </button>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <button className="spc-btn"  onClick={handleLogin}>
            Login{" "}
          </button>
        </li>
      )}
    </>
  );
}
