import { useState } from "react";
import "./App.css";
import AccordianApp from "./components/accordian";
import RandomColorGenerater from "./components/random color";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* project-1  */}
      {/* <AccordianApp /> */}

      {/* project -2  */}
      <RandomColorGenerater />
    </>
  );
}

export default App;
