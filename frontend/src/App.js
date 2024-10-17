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
// import Authentication from "./components/Auth/Authentication";
function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header/>
          {/*  {userRole === "admin" ? <AdminHeader/> : <Header/>}   */}
          <ToastContainer position="top-center" theme="dark" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reservations" element={<Reservations />} />

            {/* admin routes */}
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
