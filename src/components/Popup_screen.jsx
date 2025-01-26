import React from 'react'
import welcomeVideo from '../../public/assets/videos/welcome.mp4';

const Popup_screen = () => {
  return (
    <div className='container h-full w-full'>
        <div className='h-full w-full' onClick={()=>{
            window.location.href = './sign-up'
        }}>
      <video autoPlay muted loop className='w-full h-full'>
          <source src={welcomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
    </div>
  )
}

export default Popup_screen
