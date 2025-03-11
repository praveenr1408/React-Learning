import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import User from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />}/>
            <Route path="user/:username" element={<User />}/>
          </Route>

          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
