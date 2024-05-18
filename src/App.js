import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mail from "./Components/MailComponent/Mail";
import EmailList from "./Components/EmailListComponent/EmailList";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route path='/mail' element={<Mail />}></Route>
            <Route path='/' element={<EmailList />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
