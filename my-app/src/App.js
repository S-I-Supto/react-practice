import "./App.css";
import NavigationBar from "./components/Navbar";
import TextForm from "./components/textform";
import About from "./components/about";
import Alert from "./components/alert";
import React, { useState } from "react";
function App() {
  const [currentmode, updatedmode] = useState("light");
  const [currentalert, setcurrentalert] = useState(null);
  const alertdefiner = (definer) => {
    setcurrentalert(definer);
  };
  let togglemode = () => {
    if (currentmode === "light") {
      updatedmode("dark");
      // setcurrentalert("dark mode enabled");
      alertdefiner("dark mode enabled");
      setTimeout(() => {
        // setcurrentalert(null);
        alertdefiner(null);
      }, 3000);
    } else {
      updatedmode("light");
      alertdefiner(null);
      // setcurrentalert(null);
    }
  };
  return (
    <>
      <NavigationBar
        title=" Supto "
        home=" My Home"
        mode={currentmode}
        togglemode={togglemode}
      />
      <Alert alert={currentalert} />
      <div className="container">
        <TextForm alertdefiner={alertdefiner} />
      </div>

      <About />
    </>
  );
}

export default App;
