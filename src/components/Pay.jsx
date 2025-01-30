import React from 'react'
import QR_ScannerV2 from './QR_Scanner_v2'

const Pay = () => {
  return (
    <div className='h-full'>
        <h1 className='text-black'>Pay</h1>
      <QR_ScannerV2 />
    </div>
  )
}

export default Pay
