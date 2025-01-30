import supabase from '../utils/supabase';
import { useState } from 'react';
import login_bg_vid from '../../public/assets/videos/login_bg_video.mp4';
const Sign_up = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // Allowed domains
  const allowedDomains = ['iiserb.ac.in'];
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            hd: allowedDomains[0], // Restrict to specific domain using Google's 'hd' parameter
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: `${window.location.origin}/home`,
        },
      });
      console.log(data)
      // if (error) {
      //   console.error("Login Error:", error.message);
      //   setErrorMessage(error.message);
      //   return;
      // }

      // // The domain check is now handled by Google OAuth directly
      // console.log('OAuth flow initiated successfully:', data);

      // // Fetch the user's profile to get the email
      // const user = supabase.auth.user();
      // const userEmail = user.email;

      // // Check if the user already exists in the Users table
      // const { data: existingUser, error: fetchError } = await supabase
      //   .from('Users')
      //   .select('*')
      //   .eq('email', userEmail)
      //   .single();

      // if (fetchError) {
      //   console.error("Error fetching user:", fetchError.message);
      //   setErrorMessage("Error fetching user data.");
      //   return;
      // }

      // if (!existingUser) {
      //   // Insert new user data into the Users table
      //   const { data: newUser, error: insertError } = await supabase
      //     .from('Users')
      //     .insert([
      //       { email: userEmail, full_name: user.user_metadata.full_name },
      //     ])
      //     .select();

      //   if (insertError) {
      //     console.error("Error inserting user:", insertError.message);
      //     setErrorMessage("Error inserting user data.");
      //     return;
      //   }

      //   console.log("New user inserted:", newUser);
      // } else {
      //   console.log("User already exists:", existingUser);
      // }

    } catch (error) {
      console.error("Unexpected error:", error.message);
      setErrorMessage("Unexpected error occurred. Please try again.");
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
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Join the Party
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-4 bg-white/80 px-4 py-2 rounded">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sign_up;