import { useState } from "react";
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link,
  Routes,
} from "react-router-dom";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  // const defaultStyle = {color : 'dark'};
  const [mode, setMode] = useState("light");
  // const blueMode = 'blue';
  const [alert, setAlert] = useState(null);
  // const [style, setStyle] = useState({ color: "black", backgroundColor: "white" });
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

  const removeAllClasses = () =>{
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
   try{
    console.log('cls',cls);
    removeAllClasses();
    const colorsList = ['dark','light'];
    if(!colorsList.includes(cls)){
      document.body.classList.add(`bg-${cls}`);
    }
    if (cls === "dark") {
      document.body.style.backgroundColor = "grey";
      setMode("dark");
      showAlert("success", "Dark mode has been enabled!");
    }
    else if(cls === 'primary'){
      setMode('blue');
      showAlert("success", "Blue mode has been enabled!");
    }
    else if(cls === 'danger'){
      setMode('red');
      showAlert("success", "Red mode has been enabled!");
    } 
    else if(cls === 'warning'){
      setMode('yellow');
      showAlert("success", "Yellow mode has been enabled!");
    } 
    else if(cls === 'success'){
      setMode('green');
      showAlert("success", "Success mode has been enabled!");
    }  else {
      // setMyMode('dark');
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("success", "Light mode has been enabled!");
    } 
   }catch(e){
    console.log('e',e);
   }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtilsBlog" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
              <Route 
                  exact 
                  path="/about" 
                  element={
                  <About 
                    mode={mode}
                  />
                }
              ></Route>
              <Route
                exact         //To avoid partial matching
                path="/"
                element={
                  <TextForm
                    heading="Enter the text to analyze"
                    mode={mode}
                    showalert={showAlert}
                  />
                }
              ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
