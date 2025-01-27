import supabase from '../utils/supabase';
import { useState } from 'react';
import login_bg_vid from '../../public/assets/videos/login_bg_video.mp4';

const Sign_up = () => {
  const [errorMessage, setErrorMessage] = useState("");

  // Allowed domains (example)
  const allowedDomains = ['3@iiserb.ac.in','4@iiserb.ac.in'];

  const handleLogin = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://freshy-pay.vercel.app/home', // Redirect after successful login
      },
    });

    // Check if there was an error during OAuth login
    if (error) {
      setErrorMessage(error.message);
      return;
    }

    // If the login is successful, check if the user's email domain is allowed
    const userEmail = user?.email;
    const userDomain = userEmail?.split('2')[1];

    if (userDomain && !allowedDomains.includes(userDomain)) {
      // If domain is not allowed, sign the user out and show an error
      await supabase.auth.signOut();
      setErrorMessage('Your domain is not allowed to sign in.');
    } else {
      // Continue to the app if the domain is allowed
      console.log('User logged in successfully:', user);
    }
  };

  return (
    <div className='container h-full w-full'>
      <div className='h-full w-full'>
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
