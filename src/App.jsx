import { useState } from "react";
import "./App.css";
import AccordianApp from "./components/accordian";
import RandomColorGenerater from "./components/random color";
import GiveStar from "./components/give star";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* project-1  */}
      {/* <AccordianApp /> */}

      {/* project -2  */}
      {/* <RandomColorGenerater /> */}

      {/* project 3  */}

      <GiveStar />
    </>
  );
}

export default App;
