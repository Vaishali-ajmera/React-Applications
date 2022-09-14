import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enabled", "success");

    }
  }
  return (
    <>
    <Router>
      <Navbar title = "textUtils" mode = {mode} toggleMode= {toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Routes>         
          <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter the text to analyse below" mode = {mode} />}  />
         
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
