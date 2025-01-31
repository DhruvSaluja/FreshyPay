// import React from 'react'
// import { useState , useEffect} from 'react'
// import WifiIcon from '@mui/icons-material/Wifi';
// import supabase from '../utils/supabase';
// const FreshersCard = () => {
//     const [Data,setData] = useState([]);
//     const [myBalance,setMyBalance] = useState('');

//     useEffect(() => {
//       const fetchData = async () => {
        
//         const { data, error } = await supabase.auth.getUser();
  
//         if (error) {
//           alert('Could not find data');
//           console.error(error);
//         } else {
//           console.log(data)
//           setData(data); // Set the user data
//           console.log(Data); // Assuming AccountNo is a property of user
//         }
//       };
  
//       fetchData();
//     }, []);
    
    
//         useEffect(() =>{
//           const fetchBalance = async () => {
           
//             const { data, error } = await supabase.from('Users').select('Balance').eq('AccountNo', `${((((Data.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135'}`);
          
//             if (error) {
//               alert('Could not find data');
//               console.error(error);
//             }
//             else{
//               console.log(data);
//               setMyBalance(data[0].Balance);
//             }
    
          
//           };
//         fetchBalance();
//         }, [])
//   return (
//     <div className='mt-20 w-full'>
//     {(Data && Data.identities && Data.identities[0])?(
        
//     <div className='w-full'>    
//         <h1 className='text-center text-2xl font-serif'>Welcome {((Data.identities[0].identity_data.full_name).split('2'))[0]}</h1>
//     <div className='Card bg-[#02190B] opacity-[82%] w-3/4 mx-auto h-1/5 rounded-2xl shadow-xl shadow-[#626960] '>
//        <div className='inner-card'>
//         <div className='Joker-card mt-3'>
//             <h1 className='ml-3 pt-3 font-bold text-lg'>Joker Bank Of <span className='block -mt-2'>IISERB</span></h1>
//             <h1></h1>
//         </div>
//         <div className='Accoun_number flex justify-between items-center mt-1'>
//             <h1 className='font-bold ml-3 inline-block tracking-widest'>{((((Data.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135'}</h1>
//             <div className='inline-block mr-7 rotate-90'><WifiIcon  /></div>
//         </div>
//         <div className='Balance flex justify-between items-center'>
//             <h1 className=' font-bold ml-3 inline-block'>Balance: {myBalance} <span className='text-yellow-400 text-lg font-serif font-extrabold'>J.C</span></h1>
            
//  </div>
//  <div className='Valid_Thru'>
//             <h1 className='ml-3 mt-3'>VALID THRU- <span>31/01/25</span></h1>
//  </div>
//  <div className='Name'>
//             <h1 className='ml-3 text-xl font-semibold '>{(((Data.identities[0].identity_data.full_name).split('2'))[0]).toUpperCase()}</h1>
//  </div>
//        </div>
//     </div>
//     </div>
// ): (<p>Loading data...</p>)}
// </div>
//   )
// }


// export default FreshersCard






import React from 'react'
import { useState, useEffect } from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import supabase from '../utils/supabase';

const FreshersCard = () => {
    const [Data, setData] = useState(null);
    const [myBalance, setMyBalance] = useState('1000.00');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data :{user}, error } = await supabase.auth.getUser();
            console.log('Fetched user:', user); // Debug log
            if (error) {
                alert('Could not find data');
                console.error(error);
            } else {
                setData(user);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchBalance = async () => {
          console.log(Data);
            if (!Data) {
                return;
            }

            try {
              console.log("trying")
                const fullName = Data?.identities[0].identity_data.full_name;
                const accountNo = `${fullName.split(' ').at(-1).slice(1)} 1221 1013 4135`;
                
                const { data, error } = await supabase
                    .from('Users')
                    .select('Balance')
                    .eq('AccountNo', accountNo);

                console.log(data);

                if (error) throw error;
                if (data) {
                    setMyBalance(data[0].Balance);
                }
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        if (!isLoading && Data) {
            fetchBalance();
        }
    }, [Data, isLoading]);

    // ...rest of component
    return (
      <div className='mt-20 w-full'>
      {(Data && Data.identities && Data.identities[0] && myBalance)?(
          
      <div className='w-full'>    
          <h1 className='text-center text-2xl font-serif'>Welcome {((Data.identities[0].identity_data.full_name).split('2'))[0]}</h1>
      <div className='Card bg-[#02190B] opacity-[82%] w-3/4 mx-auto h-1/5 rounded-2xl shadow-xl shadow-[#626960] '>
         <div className='inner-card'>
          <div className='Joker-card mt-3'>
              <h1 className='ml-3 pt-3 font-bold text-lg'>Joker Bank Of <span className='block -mt-2'>IISERB</span></h1>
              <h1></h1>
          </div>
          <div className='Accoun_number flex justify-between items-center mt-1'>
              <h1 className='font-bold ml-3 inline-block tracking-widest'>{((((Data.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135'}</h1>
              <div className='inline-block mr-7 rotate-90'><WifiIcon  /></div>
          </div>
          <div className='Balance flex justify-between items-center'>
              <h1 className=' font-bold ml-3 inline-block'>Balance: {myBalance !== undefined ? myBalance : 1000.00} <span className='text-yellow-400 text-lg font-serif font-extrabold'>J.C</span></h1>
              
   </div>
   <div className='Valid_Thru'>
              <h1 className='ml-3 mt-3'>VALID THRU- <span>31/01/25</span></h1>
   </div>
   <div className='Name'>
              <h1 className='ml-3 text-xl font-semibold '>{(((Data.identities[0].identity_data.full_name).split('2'))[0]).toUpperCase()}</h1>
   </div>
         </div>
      </div>
      </div>
  ): (<p>Loading data...</p>)}
  </div>
    )
};

export default FreshersCard;
