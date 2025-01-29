// import React from 'react'
// import FreshersCard from './FreshersCard'
// import CircularButton from './CircularButton'
// import PaymentsIcon from '@mui/icons-material/Payments';
// import CallReceivedIcon from '@mui/icons-material/CallReceived';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import background from '../assets/images/welcomea.png'
// const Home = () => {
//   return (
//     <>
//     {/* <img src={background}  className='absolute' alt=""/> */}
//      <div className='bg-[url(src/assets/images/welcomea.png)))]'>
//      <FreshersCard />
//      <div className="container flex justify-around mt-4">
//      <CircularButton image={<PaymentsIcon className='text-black'/> } text={"Pay Now"} link={"/pay"}/>
//      <CircularButton image={<CallReceivedIcon className='text-black'/> } text={"Received"} link={"/receive"}/>
//      </div>
//      {/* <CircularButton image={<AutoAwesomeIcon className='text-black'/> } text={"Redeem Coins"}/>
//      <CircularButton image={<ReceiptLongIcon className='text-black'/> } text={"Transactions"}/> */}
//      </div>

//     </>
//   )
// }

// export default Home

import React from 'react';
import { useState , useEffect} from 'react'
import FreshersCard from './FreshersCard';
import CircularButton from './CircularButton';
import PaymentsIcon from '@mui/icons-material/Payments';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import background from '../../public/assets/images/welcomea.png';
import send from '../../public/assets/images/Sendaaa.png';
import receive from '../../public/assets/images/Receivea.png';
import supabase from '../utils/supabase';
import exit from '../../public/assets/images/Exit.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        alert('Could not find data');
        console.error(error);
      } else {
        setData(data.user); // Set the user data
        console.log(((data.user.identities[0].identity_data.full_name).split('2'))[1]); // Assuming AccountNo is a property of user
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
   
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Logout Error:', error.message);
    } else {
      window.location.href = '/'; // Redirect to the login page after logout
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <button onClick={handleLogout}
      
        className="absolute z-10 top-4 right-1 bg-transparent text-white px-4 py-2 rounded"
      >
        <LogoutIcon  className='scale-125'/>
      </button>
      {/* Other elements */}
      <div className="absolute inset-0 flex flex-col items-center">
        <FreshersCard />
        <div className="container flex justify-around mt-24 ">
          <CircularButton
            link={"/pay"}
            img={send}
          />
          <CircularButton
            link={"/receive"}
            img={receive}
          />
        </div>
        {/* Uncomment if needed */}
        {/* <CircularButton image={<AutoAwesomeIcon className='text-black'/> } text={"Redeem Coins"}/>
        <CircularButton image={<ReceiptLongIcon className='text-black'/> } text={"Transactions"}/> */}
      </div>
    </div>
  );
};

export default Home;



