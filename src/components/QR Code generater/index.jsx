import { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGeneraterApp() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState(null);

  function generateQRCode() {
    setQrCodeValue(inputValue);
    setInputValue("");
  }

  return (
    <div className="flex justify-center pt-10 w-full h-screen">
      <div className="p-6 border h-fit rounded-xl w-[400px] space-y-5">
        <h1 className="text-2xl font-bold text-center">QR Code Generator</h1>
        <div className="flex gap-4">
          <input
            value={inputValue}
            className="border px-3 rounded-xl w-full"
            placeholder="Enter the text"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => generateQRCode()}
            className="px-4 py-1 bg-amber-700 rounded-full text-white"
          >
            Generate
          </button>
        </div>
        {qrCodeValue ? (
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 200,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={qrCodeValue}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default QRCodeGeneraterApp;
