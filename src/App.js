import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import CreateForm from "./pages/createForm/createForm";
import CheckingF from "./pages/checkingForm/checkingForm";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createForm" element={<CreateForm />} />
          <Route path="/checkingForm" element={<CheckingF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;