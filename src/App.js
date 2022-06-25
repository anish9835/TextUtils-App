import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  // UseStates
  const [mode, setMode] = useState("light"); // wheter Dark mode or not
  const [alert, SetAlert] = useState(null);

  // Toggle FUnctions
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b3566";
      showAlert("Dark mode has been Enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success")
    }
  };

  // Show Alert Function
  const showAlert = (message, type) => {
    SetAlert({
      message,
      type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
        <Alert alert={alert} />
        <TextForm heading="Try TextUtils - word counter, character, remove extra spaces" mode={mode} showAlert={showAlert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - word counter, character, remove extra spaces" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}
export default App;
