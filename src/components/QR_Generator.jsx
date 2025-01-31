// import React from "react";
// import ReactDOM from "react-dom";
// import QRCode from "react-qr-code";
// import { useState , useEffect} from 'react'
// import supabase from '../utils/supabase';

// const QR_Generator = () => {
//   const [Data,setData] = useState([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         const { data, error } = await supabase.auth.getUser();
  
//         if (error) {
//           alert('Could not find data');
//           console.error(error);
//         } else {
//           setData(data.user); // Set the user data
//           console.log(Data); // Assuming AccountNo is a property of user
//         }
//       };
  
//       fetchData();
//     }, []);

//   return (
//     <div>
//       {(Data && Data.identities && Data.identities[0])?(
//         <div style={{ height: "auto", margin: "30% auto", maxWidth: 300, width: "100%" }}>
//         <QRCode
//           size={256}
//           style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//           className="border-4 border-red-600"
//           value={((((Data.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135'}
         
//           viewBox={`0 0 256 256`}
//         />
//       </div>
          
        
//     ): (<p>Loading data...</p>)}
//     </div>
//   )
// }

// export default QR_Generator

import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import supabase from '../utils/supabase';

const QR_Generator = () => {
  const [Data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAndCreateUser = async () => {
      try {
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError) throw authError;

        // Check if user exists
        const { data: existingUser, error: checkError } = await supabase
          .from('Users')
          .select('*')
          .eq('email', user.email)
          .maybeSingle();

        if (!existingUser && !checkError) {
          // Insert new user
          const { error: insertError } = await supabase
            .from('Users')
            .insert([{
              email: user.email,
              fName: (user.identities[0].identity_data.full_name).split('2')[0],
              RollNo: (((user.identities[0].identity_data.full_name).split(' ')).at(-1)),
              AccountNo: ((((user.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135',
              Balance: '1000.00',
              account_type: 'User',
            }]);

          if (insertError) throw insertError;
        }

        setData(user);
      } catch (error) {
        console.error('Error:', error.message);
        alert('Failed to verify user');
      } finally {
        setIsLoading(false);
      }
    };

    checkAndCreateUser();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (Data?.identities?.[0]) ? (
        <div style={{ height: "auto", margin: "30% auto", maxWidth: 300, width: "100%" }}>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            className="border-4 border-red-600"
            value={((((Data.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135'}
            viewBox={`0 0 256 256`}
          />
        </div>
      ) : (
        <p>Error loading QR code</p>
      )}
    </div>
  );
};

export default QR_Generator;