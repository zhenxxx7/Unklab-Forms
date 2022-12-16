import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import CreateForm from "./pages/createForm/createForm";
import CheckingF from "./pages/checkingForm/checkingForm";
import FinishPage from "./pages/finish/finish";
import AnswerForm from "./pages/answerForm/answerForm";
import AnswerCard from "./component/card/answerCard";
import './App.css'

function App() {
  return (
    <div className="tx">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createForm" element={<CreateForm />} />
          <Route path="/checkingForm" element={<CheckingF />} />
          <Route path="/finish" element={<FinishPage />} />
          <Route path="/answerForm" element={<AnswerForm />} />
          <Route path="/answerCard" element={<AnswerCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;