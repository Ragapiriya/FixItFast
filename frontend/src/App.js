import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Profile from "./components/Profile/Profile";
import Reservations from "./components/Reservations/Reservations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./customToast.css"; //
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminHeader from "./components/layouts/AdminHeader";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";
import NotFound from "./components/layouts/NotFound";

function App() {
  const [userRole, setUserRole] = useState(null);
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        const token = await getAccessTokenSilently();
        const decodedToken = jwtDecode(token);
        const roles = decodedToken["your_name_space/roles"];
        setUserRole(roles.includes("Admin") ? "Admin" : "User");
        // console.log("Role", userRole);
      };

      getToken();
    }
  }, [isAuthenticated, userRole]);
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          {userRole && userRole === "Admin" ? <AdminHeader /> : <Header />}
          <ToastContainer position="top-center" theme="dark" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reservations" element={<Reservations />} />

            {/* admin routes */}
            <Route
              path="/admin"
              element={userRole === "Admin" ? <AdminDashboard /> : <NotFound />}
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
