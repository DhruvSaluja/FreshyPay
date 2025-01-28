// import supabase from '../utils/supabase';
// import { useState } from 'react';
// import login_bg_vid from '../../public/assets/videos/login_bg_video.mp4';

// const Sign_up = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   // Allowed domains (example)
//   const allowedDomains = ['3@iiserb.ac.in','4@iiserb.ac.in'];

//   const handleLogin = async () => {
//     const { user, session, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         redirectTo: 'https://freshy-pay.vercel.app/home', // Redirect after successful login
//       },
//     });

//     // Check if there was an error during OAuth login
//     if (error) {
//       setErrorMessage(error.message);
//       return;
//     }

//     // If the login is successful, check if the user's email domain is allowed
//     const userEmail = user?.email;
//     console.log(userEmail);
//     const userDomain = userEmail?.split('2')[1];

//     if (userDomain && !allowedDomains.includes(userDomain)) {
//       // If domain is not allowed, sign the user out and show an error
//       await supabase.auth.signOut();
//       setErrorMessage('Your domain is not allowed to sign in.');
//     } else {
//       // Continue to the app if the domain is allowed
//       console.log('User logged in successfully:', user);
//     }
//   };

//   return (
//     <div className='container h-full w-full'>
//       <div className='h-full w-full'>
//         <video autoPlay muted loop className='w-full h-full'>
//           <source src={login_bg_vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//           <div className="text-center">
//             {/* Button */}
//             <button
//               onClick={handleLogin}
//               className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
//             >
//               Join the Party
//             </button>
//             {/* Error Message */}
//             {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_up;

// import supabase from '../utils/supabase';
// import { useState } from 'react';
// import login_bg_vid from '../../public/assets/videos/login_bg_video.mp4';

// const Sign_up = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   // Allowed domains (example)
//   const allowedDomains = ['iiserb.ac.in']; // Only the domain part

//   const handleLogin = async () => {
//     const { user, session, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       // options: {
//       //   redirectTo: 'https://freshy-pay.vercel.app/home', // Redirect after successful login
//       // },
//     });

//     // Check if there was an error during OAuth login
//     if (error) {
//       console.error("Login Error:", error.message);
//       setErrorMessage(error.message);
//       return;
//     }

//     // Debugging: Log the user object
//     console.log("User Object:", user);

//     // If the login is successful, check if the user's email domain is allowed
//     const userEmail = user?.email; // Fetch user email
//     console.log("User Email:", userEmail); // Debugging: Log the email

//     const userDomain = userEmail?.split('@')[1]?.trim().toLowerCase(); // Extract and clean domain
//     console.log("Extracted Domain:", userDomain); // Debugging: Log the domain

//     if (userDomain && !allowedDomains.includes(userDomain)) {
//       console.log("Is domain allowed:", allowedDomains.includes(userDomain)); // Debugging
//       // If domain is not allowed, sign the user out and show an error
//       await supabase.auth.signOut();
//       setErrorMessage('Your domain is not allowed to sign in.');
//     } else {
//       // Continue to the app if the domain is allowed
//       console.log('User logged in successfully:', user);
//     }
//   };

//   return (
//     <div className='container h-full w-full'>
//       <div className='h-full w-full'>
//         <video autoPlay muted loop className='w-full h-full'>
//           <source src={login_bg_vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//           <div className="text-center">
//             {/* Button */}
//             <button
//               onClick={handleLogin}
//               className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
//             >
//               Join the Party
//             </button>
//             {/* Error Message */}
//             {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_up;



import supabase from '../utils/supabase';
import { useState } from 'react';
import login_bg_vid from '../../public/assets/videos/login_bg_video.mp4';
const Sign_up = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // Allowed domains
  const allowedDomains = ['4@iiserb.ac.in'];
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
      if (error) {
        console.error("Login Error:", error.message);
        setErrorMessage(error.message);
        return;
      }
      // The domain check is now handled by Google OAuth directly
      console.log('OAuth flow initiated successfully:', data);
      
    } catch (error) {
      console.error("Unexpected error:", error);
      setErrorMessage('An unexpected error occurred. Please try again.');
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



// import supabase from '../utils/supabase';
// import { useState } from "react";
// import login_bg_vid from "../../public/assets/videos/login_bg_video.mp4";

// const Sign_up = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   // Allowed domains
//   const allowedDomains = ["iiserb.ac.in"];

//   const handleLogin = async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: "google",
//         options: {
//           redirectTo: `${window.location.origin}/home`, // Redirect to home after successful login
//         },
//       });

//       if (error) {
//         console.error("Login Error:", error.message);
//         setErrorMessage(error.message);
//         return;
//       }

//       // Wait for the user session to be created
//       const session = await supabase.auth.getSession();
//       const userEmail = session.data?.user?.email;

//       console.log("User Email:", userEmail); // Debugging

//       // Extract the domain from the email
//       const userDomain = userEmail?.split("@")[1]?.trim().toLowerCase();
//       console.log("Extracted Domain:", userDomain); // Debugging

//       // Check if the domain is allowed
//       if (!userDomain || !allowedDomains.includes(userDomain)) {
//         // Sign the user out if the domain is not allowed
//         await supabase.auth.signOut();
//         setErrorMessage("Your domain is not allowed to sign in.");
//       } else {
//         console.log("User logged in successfully:", session.data.user);
//       }
//     } catch (error) {
//       console.error("Unexpected error:", error);
//       setErrorMessage("An unexpected error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="container h-full w-full">
//       <div className="h-full w-full">
//         <video autoPlay muted loop className="w-full h-full">
//           <source src={login_bg_vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//           <div className="text-center">
//             <button
//               onClick={handleLogin}
//               className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
//             >
//               Join the Party
//             </button>
//             {errorMessage && (
//               <p className="text-red-500 mt-4 bg-white/80 px-4 py-2 rounded">
//                 {errorMessage}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_up;


// import supabase from '../utils/supabase';
// import { useState } from "react";
// import login_bg_vid from "../../public/assets/videos/login_bg_video.mp4";

// const Sign_up = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   // Allowed domains
//   const allowedDomains = ["iiserb.ac.in"];

//  // ...existing code...

// const handleLogin = async () => {
//   try {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         redirectTo: `${window.location.origin}/home`, // Redirect after successful login
//       },
//     });

//     if (error) {
//       console.error("Login Error:", error.message);
//       setErrorMessage("Login failed. Please try again.");
//       return;
//     }

//     // Fetch the user's profile to get the email
//     const user = supabase.auth.user();
//     console.log(user);
//     const userEmail = user.email;
//     const userDomain = userEmail.substring(userEmail.lastIndexOf("@") + 1);

//     if (!allowedDomains.includes(userDomain)) {
//       await supabase.auth.signOut();
//       setErrorMessage("Email domain not allowed.");
//       return;
//     }

//     // Proceed with login
//     console.log("Login successful:", data);
//   } catch (error) {
//     console.error("Login Error:", error.message);
//     setErrorMessage("Login failed. Please try again.");
//   }
// };

// // ...existing code...

//   return (
//     <div className="container h-full w-full">
//       <div className="h-full w-full">
//         <video autoPlay muted loop className="w-full h-full">
//           <source src={login_bg_vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//           <div className="text-center">
//             <button
//               onClick={handleLogin}
//               className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
//             >
//               Join the Party
//             </button>
//             {errorMessage && (
//               <p className="text-red-500 mt-4 bg-white/80 px-4 py-2 rounded">
//                 {errorMessage}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_up;
