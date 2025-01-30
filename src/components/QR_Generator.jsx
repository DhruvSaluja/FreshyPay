import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { useState , useEffect} from 'react'
import supabase from '../utils/supabase';

const QR_Generator = () => {
  const [Data,setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const { data, error } = await supabase.auth.getUser();
  
        if (error) {
          alert('Could not find data');
          console.error(error);
        } else {
          setData(data.user); // Set the user data
          console.log(Data); // Assuming AccountNo is a property of user
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      {(Data && Data.identities && Data.identities[0])?(
        <div style={{ height: "auto", margin: "30% auto", maxWidth: 300, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          className="border-4 border-red-600"
          value={((((Data.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135'}
         
          viewBox={`0 0 256 256`}
        />
      </div>
          
        
    ): (<p>Loading data...</p>)}
    </div>
  )
}

export default QR_Generator
