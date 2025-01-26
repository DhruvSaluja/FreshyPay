import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';
import { Link } from 'react-router-dom';

const CircularButton = (props) => {
  return (
    <div className='button flex-col items-center  inline-block  mt-8'>
      <Link to={props.link}>
      <button className=' bg-transparent rounded-2xl mx-auto  inline-block '>
        <img src={props.img} className='h-[150px]' alt="" />
      </button>
      </Link>
      <div>
      
        </div>
    </div>
  )
}

export default CircularButton
