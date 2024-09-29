import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { verifyTokenThunk } from "./stores/slices/authSlice";
import { useAppDispatch } from "./hooks/hooks";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(verifyTokenThunk()); // Properly typed dispatch
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
