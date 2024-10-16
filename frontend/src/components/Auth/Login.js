import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    user,
    loginWithRedirect,
    logout,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  // let navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithRedirect();
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        //getting access token in frontend.
        const accessToken = await getAccessTokenSilently();
        //API call to end point to get user information
        // console.log(accessToken)
        const response = await axios.get(
          "https://dev-qro8hjwxug8ea45c.us.auth0.com/userinfo",
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const userData = await response.data;
        console.log("USerDATa", userData);
        sessionStorage.setItem("userInfo", JSON.stringify(userData));
      } catch (error) {
        console.log("Error fetching user information", error);
      }
    };
    if (isAuthenticated) {
      const fetchUserInfo = async () => {
        try {
          //getting access token in frontend.
          const accessToken = await getAccessTokenSilently();
          //API call to end point to get user information
          // console.log(accessToken)
          const response = await axios.get(
            "https://dev-qro8hjwxug8ea45c.us.auth0.com/userinfo",
            {
              headers: {
                authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const userData = await response.data;
          console.log("USerDATa", userData);
          sessionStorage.setItem("userInfo", JSON.stringify(userData));
        } catch (error) {
          console.log("Error fetching user information", error);
        }
      };
      fetchUserInfo(); // fetching  user info once authenticated
      axios
        .post("/api/v1/user/new", {
          userName: user.nickname,
          name: user.name,
          picture: user.picture,
          email: user.email,
        })
        .then((response) => {
          console.log("UserSaved", response.data);
        })
        .catch((error) => {
          console.log("Error saving user", error);
        });
    }
  }, [isAuthenticated, user]);

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
            <button className="btn">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </button>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <button className="spc-btn" onClick={handleLogin}>
            Login{" "}
          </button>
        </li>
      )}
    </>
  );
}
