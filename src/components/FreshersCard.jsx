import React from 'react'
import { useState , useEffect} from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import supabase from '../utils/supabase';
const FreshersCard = () => {
    const [Data,setData] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
           const {data,error } = await supabase.from('Users').select('*').eq('RollNo','23219');
           setData(data);
         
  
          if(error) {
            alert('Could not find data');
            console.error(error);
          } else {
            
            console.log(Data[0].AccountNo);
          }
        }
        fetchData();
      },[])

  return (
    <div>
    {(Data && Data.length>0)?(
        
    <div>    
        <h1 className='text-center text-2xl mt-4 font-serif'>Welcome {Data[0].fName}</h1>
    <div className='Card bg-green-600 w-3/4 mx-auto h-1/5 rounded-2xl shadow-xl shadow-white'>
       <div className='inner-card'>
        <div className='Joker-card mt-3'>
            <h1 className='ml-3 pt-3 font-bold text-lg'>Joker Bank Of <span className='block -mt-2'>IISERB</span></h1>
        </div>
        <div className='Accoun_number flex justify-between items-center mt-1'>
            <h1 className='font-bold ml-3 inline-block tracking-widest'>{Data[0].AccountNo}</h1>
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
            <h1 className='ml-3 text-xl font-semibold '>{Data[0].fName.toUpperCase()} {Data[0].lName.toUpperCase()}</h1>
 </div>
       </div>
    </div>
    </div>
): (<p>Loading data...</p>)}
</div>
  )
}


export default FreshersCard
