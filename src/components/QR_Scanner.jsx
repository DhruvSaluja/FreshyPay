import React, { useEffect,useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
const QR_Scanner = () => {
    const [scanResult, setScanResult] = useState(null);
    useEffect(()=>{
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 500,
                height: 500
            },
            fps: 60
    
        });
        scanner.render(success,error);
        function success(result){
            scanner.clear();
            setScanResult(result);
        }
        function error(error){
            console.warn(error);
        }
    },[])
  return (
    <div >
      <h1 className='text-white'>Scan QR Code</h1>
        {scanResult ? <div className='text-white'>
            Success: <a href={scanResult}>{scanResult}</a>
        </div>
        : <div id='reader' className='text-white'></div>}
    </div>
  )
}

export default QR_Scanner
