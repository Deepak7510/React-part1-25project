import { useEffect, useState } from "react";

function RandomColorGenerater() {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState(null);

  function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  function handleGenerateColor() {
    if (colorType === "HEX") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i <= 5; i++) {
        hexColor += hex[generateRandomNumber(15)];
      }
      setColor(hexColor);
    } else {
      const c1 = generateRandomNumber(251);
      const c2 = generateRandomNumber(251);
      const c3 = generateRandomNumber(251);
      const rgb = `rgb(${c1} ${c2} ${c3})`;
      setColor(rgb);
    }
  }

  useEffect(() => {
    handleGenerateColor();
  }, [colorType]);

  console.log(color);

  return (
    <div
      style={{ background: color }}
      className="flex w-full h-screen justify-center py-6"
    >
      <div>
        <div className="flex gap-3">
          <button
            onClick={() => setColorType("HEX")}
            className="px-4 py-1.5 bg-red-600 rounded-full text-medium text-white"
          >
            Create Hax Color
          </button>
          <button
            onClick={() => setColorType("RGB")}
            className="px-4 py-1.5 bg-red-600 rounded-full text-medium text-white"
          >
            Create RGB Color
          </button>
          <button
            onClick={handleGenerateColor}
            className="px-4 py-1.5 bg-red-600 rounded-full text-medium text-white"
          >
            Generate Random Color
          </button>
        </div>
        <div className="text-white font-semibold text-4xl text-center pt-40">
          {colorType === "HEX" ? "Hex Color" : "RGB Color"}
        </div>
        <div className="text-white font-semibold text-4xl text-center pt-40">
          {color}
        </div>
      </div>
    </div>
  );
}

export default RandomColorGenerater;
