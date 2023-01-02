import React, { useState } from "react";
import QRCode from "qrcode.react";

function Texttoqr() {
    
    const [result, setResult] = useState("");
    const [URL, setURL] = useState("");
    const [showQR, setShowQR] = useState(false);

    const handleScan = (data) => {
        if (data) {
          setResult(data);
        }
      };
      const handleError = (err) => {
        console.error(err);
      };

  return (
    <div className="container text-center">
      <h2>Enter your text to Generate QR Code.</h2>
      <input className="form-control text-center" onChange={(event) => setURL(event.target.value)} type="text" />
      <br />
      {showQR === true && <QRCode value={URL} />}
      <br />
      <br />
      <button onClick={() => { setShowQR(true); } } type="button">
        Generate QR Code
      </button>
      <br />
      <br />


    </div>
  )
}

// npm i qrcode.react
export default Texttoqr