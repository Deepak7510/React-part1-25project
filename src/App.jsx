import { useState } from "react";
import "./App.css";
// import RandomColorGenerater from "./components/random color";
// import CustomSlider from "./components/custom slider";
// import ReadmoreFunction from "./components/readmore func";
// import Sidebar from "./components/tree view/Sidebar";
// import QRCodeGeneraterApp from "./components/QR Code generater";
// import LightDarkMode from "./components/light-dark-mode";
// import CustomScrollInTop from "./components/custom-scroll";
// import TabTest from "./components/custom- tabs/TabTest";
import AccordionPage from "./pages/AccrodionPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/layout";
import HomePage from "./pages/HomePage";
import GiveStarPage from "./pages/GiveStarPage";
import RandomColorGeneraterPage from "./pages/RandomColorGeneraterPage";
import QRCodeGeneraterPage from "./pages/QRCodeGeneraterPage";
import ReadmoreFunctionaltyPage from "./pages/ReadmoreFunctionaltyPage";
import ThemeChangePage from "./pages/ThemeChangePage";
import CustomSliderPage from "./pages/CustomSliderPage";
import CustomTabsPage from "./pages/CustomTabsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route
            path="generate-random-color"
            element={<RandomColorGeneraterPage />}
          />
          <Route path="give-star" element={<GiveStarPage />} />
          <Route path="generate-qr-code" element={<QRCodeGeneraterPage />} />
          <Route
            path="readmore-functionalty"
            element={<ReadmoreFunctionaltyPage />}
          />
          <Route path="theme-change-mode" element={<ThemeChangePage />} />
          <Route
            path="custom-slider"
            element={
              <CustomSliderPage url={"https://picsum.photos/v2"} limit={5} />
            }
          />
          <Route path="custom-tabs" element={<CustomTabsPage />} />
        </Route>
      </Routes>

      {/* project-1  */}
      {/* <AccordionPage /> */}

      {/* project -2  */}
      {/* <RandomColorGenerater /> */}

      {/* project 3  */}
      {/* <GiveStar /> */}

      {/* project 4  */}
      {/* <CustomSlider  /> */}

      {/* project 5   */}
      {/* <ReadmoreFunction /> */}

      {/* project 6 view free  */}
      {/* <Sidebar /> */}

      {/* project 7  */}
      {/* <QRCodeGeneraterApp /> */}

      {/* project 8  */}
      {/* <LightDarkMode /> */}

      {/* project 9  */}
      {/* <CustomScrollInTop /> */}

      {/* project 10  */}
      {/* <TabTest /> */}
    </>
  );
}

export default App;
