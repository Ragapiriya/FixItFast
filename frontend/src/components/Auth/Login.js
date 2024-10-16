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
  } = useAuth0();
  // let navigate = useNavigate();
  const userData = JSON.stringify(user);
  const handleLogin = async () => {
    await loginWithRedirect();
  };
  useEffect(() => {
    if (isAuthenticated) {
      sessionStorage.setItem("userInfo",userData);
      const storedUserInfo = sessionStorage.getItem("userInfo");
      console.log("Stored ",storedUserInfo)
      axios
        .post("/api/v1/user/new", {
          userName: user.nickname,
          name: user.name,
          picture: user.picture,
          email: user.email,
        })
        .then((response) => {
          console.log("User Saved ", response.data);
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
