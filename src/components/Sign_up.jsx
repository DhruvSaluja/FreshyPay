import supabase from '../utils/supabase';
import { useState } from 'react';
import login_bg_vid from '../../assets/videos/login_bg_video.mp4'

const Sign_up = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/home`, // Redirect after successful login
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    // <div className="p-4">
    //   <h1 className="text-2xl font-bold mb-4">Login with College Email</h1>
    //   {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    //   <button
    //     onClick={handleLogin}
    //     className="bg-blue-500 text-white px-4 py-2 rounded"
    //   >
    //     Login with Google
    //   </button>
    // </div>
    <div className='container h-full w-full'>
            <div className='h-full w-full' >
          <video autoPlay muted loop className='w-full h-full'>
              <source src={login_bg_vid} type="video/mp4" />
              Your browser does not support the video tag.

            </video>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center">
          {/* Button */}
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Join the Party
          </button>
          {/* Error Message */}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
            </div>
        </div>
  );
};

export default Sign_up;
