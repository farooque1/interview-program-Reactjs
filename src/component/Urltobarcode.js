import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Urltobarcode = () => {

  const [url, setUrl] = useState("");
  const [showQR, setShowQR] = useState(false);


  const qrRef = useRef();
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };
  
  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  //  const qrcode = (
  //   <QRCodeCanvas
  //   id="qrCode"
  //   value={url}
  //   size={300} />
  //  );

  return (

    <div className="container text-center">
  
        {/* {showQR === true && <div > </div> } */}

        {showQR === true && <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300} ></QRCodeCanvas> }

      {/* <div ref={qrRef}>{qrcode}</div> */}

      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label>Enter URL</label>

          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            className="form-control"
          />

          <button type="submit" className="btn btn-warning mt-2 mb-2" value={url} onClick={() => { setShowQR(true); } }>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default Urltobarcode;