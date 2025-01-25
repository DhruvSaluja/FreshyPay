import React from 'react'
import FreshersCard from './FreshersCard'
import CircularButton from './CircularButton'
import PaymentsIcon from '@mui/icons-material/Payments';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const Home = () => {
  return (
    <>
     
     <FreshersCard />
     <div className="container flex justify-around mt-4">
     <CircularButton image={<PaymentsIcon className='text-black'/> } text={"Pay Now"} link={"/pay"}/>
     <CircularButton image={<CallReceivedIcon className='text-black'/> } text={"Received"}/>
     </div>
     {/* <CircularButton image={<AutoAwesomeIcon className='text-black'/> } text={"Redeem Coins"}/>
     <CircularButton image={<ReceiptLongIcon className='text-black'/> } text={"Transactions"}/> */}
     

    </>
  )
}

export default Home
