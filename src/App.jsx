// import { Provider } from "react-redux";
// import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}