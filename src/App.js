import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   // Switch,
//   // Link,
//   Routes,
// } from "react-router-dom";
// import About from "./components/About";

function App() {
  // const defaultStyle = {color : 'dark'};
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [myMode, setMyMode] = useState('dark');

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      // setMyMode('light');
      document.body.style.backgroundColor = "grey";
      setMode("dark");
      showAlert("success", "Dark mode has been enabled!");
    } else {
      // setMyMode('dark');
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("success", "Light mode has been enabled!");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtilsBlog" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          {/* <Routes> */}
              {/* <Route exact path="/about" element={<About />}></Route> */}
              {/* <Route
                exact         //To avoid partial matching
                path="/"
                element={ */}
                  <TextForm
                    heading="Enter the text to analyze"
                    mode={mode}
                    showalert={showAlert}
                  />
                {/* }
              ></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
