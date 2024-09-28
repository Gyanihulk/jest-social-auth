import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./middlewares/PrivateRoute";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="flex flex-col items-center">
          <div className="max-w-full sm:w-540 mt-14">
            <div className="bg-white py-14 px-16 shadow-form rounded">
              <Routes>
                <Route path="/" element={<></>} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardPage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
