import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Pay from './components/Pay'
import TransactionArea from './components/TransactionArea'
import supabase from './utils/supabase'
import Sign_up from './components/Sign_up'
import QR_Generator from './components/QR_Generator'
import Popup_screen from './components/Popup_screen'
import SlotMachine from './components/Slot-777'




function App() {


  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Popup_screen/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/sign-up" element={<Sign_up/>} />
        <Route path="/transaction/:accountNo" element={<TransactionArea />} />
        <Route path="/receive" element={<QR_Generator/>} />
        {/* <Route path="/slot" element={<Slot77/>} /> */}
      </Routes>
      
    </Router>
  )
}

export default App
  