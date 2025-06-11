import { useState } from "react";
import "./App.css";
import AccordianApp from "./components/accordian";
import RandomColorGenerater from "./components/random color";
import GiveStar from "./components/give star";
import CustomSlider from "./components/custom slider";
import ReadmoreFunction from "./components/readmore func";
import Sidebar from "./components/tree view/Sidebar";
import QRCodeGeneraterApp from "./components/QR Code generater";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* project-1  */}
      {/* <AccordianApp /> */}

      {/* project -2  */}
      {/* <RandomColorGenerater /> */}

      {/* project 3  */}
      {/* <GiveStar /> */}

      {/* project 4  */}
      {/* <CustomSlider url={"https://picsum.photos/v2"} limit={5} /> */}

      {/* project 5   */}
      {/* <ReadmoreFunction /> */}

      {/* project 6 view free  */}
      {/* <Sidebar /> */}

      {/* project 6  */}
      <QRCodeGeneraterApp />
    </>
  );
}

export default App;
