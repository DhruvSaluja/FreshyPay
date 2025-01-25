import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';
import { Link } from 'react-router-dom';
const CircularButton = (props) => {
  return (
    <div className='button flex-col items-center  inline-block  mt-8'>
      <Link to={props.link}>
      <button className=' bg-white p-3 rounded-2xl mx-auto  inline-block '>
        {props.image}
      </button>
      </Link>
      <div>
      <h1 className='text-center'>{props.text}</h1>
        </div>
    </div>
  )
}

export default CircularButton
