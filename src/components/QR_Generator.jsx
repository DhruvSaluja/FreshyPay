import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const QR_Generator = () => {
  return (
    <div>
      <div style={{ height: "auto", margin: "30% auto", maxWidth: 300, width: "100%" }}>
  <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    className="border-4 border-red-600"
    value='3107 1221 1013 4135'
    viewBox={`0 0 256 256`}
  />
</div>
    </div>
  )
}

export default QR_Generator
