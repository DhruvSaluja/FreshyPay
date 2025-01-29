import React from 'react'
import { useState , useEffect} from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import supabase from '../utils/supabase';
const FreshersCard = () => {
    const [Data,setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const { data, error } = await supabase.auth.getUser();
  
        if (error) {
          alert('Could not find data');
          console.error(error);
        } else {
          setData(data.user); // Set the user data
          console.log(Data.identities[0].identity_data.full_name); // Assuming AccountNo is a property of user
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className='mt-20 w-full'>
    {(Data && Data.identities && Data.identities[0])?(
        
    <div className='w-full'>    
        <h1 className='text-center text-2xl font-serif'>Welcome {((Data.identities[0].identity_data.full_name).split('2'))[0]}</h1>
    <div className='Card bg-[#02190B] opacity-[82%] w-3/4 mx-auto h-1/5 rounded-2xl shadow-xl shadow-[#626960] '>
       <div className='inner-card'>
        <div className='Joker-card mt-3'>
            <h1 className='ml-3 pt-3 font-bold text-lg'>Joker Bank Of <span className='block -mt-2'>IISERB</span></h1>
        </div>
        <div className='Accoun_number flex justify-between items-center mt-1'>
            <h1 className='font-bold ml-3 inline-block tracking-widest'>{(((Data.identities[0].identity_data.full_name).split('2'))[1])+' 1221 1013 4135'}</h1>
            <div className='inline-block mr-7 rotate-90'><WifiIcon  /></div>
        </div>
        {/* <div className='Balance flex justify-between items-center'>
            <h1 className='font-bold ml-3 inline-block'>Rs. 12,345.67</h1>
            <button className='bg-blue-400 text-white px-4 py-2 rounded-md'>Transfer</button>
 </div> */}
 <div className='Valid_Thru'>
            <h1 className='ml-3 mt-5'>VALID THRU- <span>31/01/25</span></h1>
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
}


export default FreshersCard
