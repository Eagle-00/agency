import React, {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MainMenu from "./components/Menus/MainMenu";
import AppFooter from "./components/views/AppFooter";
import './App.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <MainMenu/>
        <AppRouter/>
        <AppFooter/>
      </Router>
      <ToastContainer position={toast.POSITION.TOP_LEFT} />
    </>
  );
}

export default App;
