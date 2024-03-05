import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="p-4 min-w-[400px] h-screen flex items-center justify-center">
      <Routes>
        <Route element={<SignIn />} path="/signin" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
