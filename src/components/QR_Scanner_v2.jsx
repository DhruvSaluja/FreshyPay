import { useState, useEffect } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/supabase';

function QRscannerV2() {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const checkAndCreateUser = async () => {
    console.log("checking")
    try {
      // Get current auth user
      const { data: { user }, error: authError } = await supabase.auth.getUser();
       console.log(user);
      if (authError) throw authError;

      // Check if user exists in Users table
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
      
      // Start scanning
      setIsScanning(true);
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to verify user');
    }
  };

  const handleScan = (result) => {
    const accNo = result[0].rawValue;
    setScanResult(accNo);
    navigate(`/transaction/${accNo}`);
  };

  return (
    <div >
      {!isScanning ? (
        <div className='text-center '>
        <button 
          onClick={checkAndCreateUser}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Scanning
        </button>
        </div>
      ) : !scanResult ? (
        <Scanner onScan={handleScan} />
      ) : null}
    </div>
  );
}

export default QRscannerV2;