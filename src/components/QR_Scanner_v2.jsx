import React, { useState} from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';
import {useNavigate} from 'react-router-dom'
import TransactionArea from './TransactionArea'

function QRscannerV2() {
  const [scanResult, setScanResult] = useState(null); // State to store the scan result
  const navigate = useNavigate();
  const handleScan = (result) => {
    const accNo = result[0].rawValue
    console.log(result[0].rawValue); // Log the result (can be the URL or data from QR)
    setScanResult(accNo); // Store the result in state
    
    navigate(`/transaction/${accNo}`);
  };

  return (
    <div>
      {!scanResult ? (
        <Scanner onScan={handleScan} />
      ) : null}
    </div>
  );
}

export default QRscannerV2;
