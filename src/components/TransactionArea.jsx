// import React from 'react';
// import { useEffect,useState } from 'react';
// import { useParams } from 'react-router-dom';
// import supabase from '../utils/supabase';

// const TransactionArea = () => {
//   const { accountNo } = useParams();  // Get accountNo from the URL parameters
//   const [Data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () =>{
//        const {data,error } = await supabase.from('Users').select('*').eq('AccountNo',`${accountNo}`);
//        setData(data);
     

//       if(error) {
//         alert('Could not find data');
//         console.error(error);
//       } else {
        
//         console.log(Data);
//       }
//     }
//     fetchData();
//   },[])
//   const handlePay = () => {
//     // Add logic to handle the transaction
//     alert('Transaction Successful');

//   }
//   return (
//     <div>
     
//       <h2 className='text-white text-center font-bold text-2xl'>Transaction Area</h2>
//       <p className='mt-12'>Account Number: {accountNo}</p>
//       <div>
//     {(Data && Data.length>0)?(
        
//     <div>    
//          <p className='mt-2'>Name: {Data[0].fName}</p>
//     </div>
// ): (<p>Loading Name...</p>)}
// </div>
     
//       <div className="mt-4 flex justify-center items-center">
//   <input type="text" className="text-black p-2 border w-2/3 border-gray-300 rounded" placeholder="Enter Transaction Amount"
//   />
// </div>
//     <div className="mt-4 flex justify-center items-center">
//       <button  onClick={handlePay} className='w-2/4 text-white h-12 bg-blue-500 hover:bg-blue-700 mt-4 mx-auto'>Pay now</button>
//       </div>
//       {/* Add more logic to handle the transaction */}
//     </div>
//   );
// };

// export default TransactionArea;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../utils/supabase';

const TransactionArea = () => {
  const { accountNo } = useParams();
  const [userData, setUserData] = useState(null);
  const [transactionAmount, setTransactionAmount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [datasender ,setDatasender] = useState([]);
  const [senderAccount, setSenderAccount] = useState('');
  const [senderBalance, setSenderBalance] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Users')
        .select('*')
        .eq('AccountNo', `${accountNo}`)
        .single();

      if (error) {
        alert('Could not find data');
        console.error(error);
      } else {
        setUserData(data);
      }
    };
    fetchData();
  }, [accountNo]);

  
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        alert('Could not find data');
        console.error(error);
      } else {
     // Set the user data
     
        setSenderAccount(((((data.user.identities[0].identity_data.full_name).split(' ')).at(-1)).slice(1))+' 1221 1013 4135') // Assuming AccountNo is a property of user
      }
    };

    fetchData();
  }, []);

  const handlePay = async () => {
    // Validate inputs
    if (!transactionAmount) {
      alert('Please enter transaction amount');
      return;
    }

    const amount = parseFloat(transactionAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid transaction amount');
      return;
    }

    try {
      // Fetch sender's current balance
      const { data: senderData, error: senderError } = await supabase
        .from('Users')
        .select('Balance')
        .eq('AccountNo', senderAccount)
        .single();

      if (senderError) throw senderError;
       setDatasender(senderData)
      // Convert balance to number and ensure sufficient funds
      console.log(senderData)
      const senderBalance = parseFloat(senderData.Balance);
      
      if (senderBalance < amount) {
        alert('Insufficient funds');
        return;
      }

      // Fetch recipient's current balance
      const { data: recipientData, error: recipientError } = await supabase
        .from('Users')
        .select('Balance')
        .eq('AccountNo', `${accountNo}`)
        .single();

      if (recipientError) throw recipientError;

      if(senderAccount == accountNo){
        alert('Cannot transfer funds to yourself');
        return;
      }
      // Convert recipient balance to number and add transaction amount
      const recipientBalance = parseFloat(recipientData.Balance);
      const newRecipientBalance = (recipientBalance + amount).toFixed(2);
      const newSenderBalance = (senderBalance - amount).toFixed(2);

      // Update sender's balance
      const { error: senderUpdateError } = await supabase
        .from('Users')
        .update({ Balance: `${newSenderBalance}` })
        .eq('AccountNo', senderAccount);

      if (senderUpdateError) throw senderUpdateError;

      // Update recipient's balance
      const { error: recipientUpdateError } = await supabase
        .from('Users')
        .update({ Balance: `${newRecipientBalance}` })
        .eq('AccountNo', `${accountNo}`);

      if (recipientUpdateError) throw recipientUpdateError;

      // Success message
      alert('Transaction Successful');
      
      // Reset input fields
      setTransactionAmount('');
      setRecipientAccount('');

      // Optionally refresh user data
      const { data: updatedUserData } = await supabase
        .from('Users')
        .select('*')
        .eq('AccountNo', `${accountNo}`)
        .single();
      
      setUserData(updatedUserData);

      const { data: updatedSenderData } = await supabase
        .from('Users')
        .select('Balance')
        .eq('AccountNo', senderAccount)
        .single();
      
      setDatasender(updatedSenderData);

    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed. Please try again.');
    }
  };

  return (
    <div>
      <h2 className='text-white text-center font-bold text-2xl'>Transaction Area</h2>
      
      <p className='mt-12'>Account Number: {accountNo}</p>
      
      {(userData && datasender ) ? (
        <div>
          <p className='mt-2'>Name: {userData.fName}</p>
          <p className='mt-2'>Current Balance: ${parseFloat(datasender.Balance).toFixed(2)}</p>
        </div>
      ) : (
        <p>Loading User Data...</p>
      )}

      {/* <div className="mt-4 flex justify-center items-center">
        <input 
          type="text" 
          value={recipientAccount}
          onChange={(e) => setRecipientAccount(e.target.value)}
          className="text-black p-2 border w-2/3 border-gray-300 rounded mr-2" 
          placeholder="Enter Recipient Account Number" 
        />
      </div> */}

      <div className="mt-4 flex justify-center items-center">
        <input 
          type="text" 
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          className="text-black p-2 border w-2/3 border-gray-300 rounded" 
          placeholder="Enter Transaction Amount" 
        />
      </div>

      <div className="mt-4 flex justify-center items-center">
        <button 
          onClick={handlePay} 
          className='w-2/4 text-white h-12 bg-blue-500 hover:bg-blue-700 mt-4 mx-auto'
        >
          Pay now
        </button>
      </div>
    </div>
  );
};

export default TransactionArea;