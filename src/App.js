import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      <h2>Lets build gmail</h2>
    </div>
  );
}

export default App;
