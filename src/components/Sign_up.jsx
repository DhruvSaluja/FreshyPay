import supabase from '../utils/supabase';
import { useState } from 'react';

const Sign_up = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`, // Redirect after successful login
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login with College Email</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Sign_up;
