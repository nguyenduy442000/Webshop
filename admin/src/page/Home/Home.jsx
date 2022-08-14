import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navigation/Navbar'
import './home.scss'

import Router from '../../routes/Router'
const Home = () => {
  return (
    <section>
  
    <div className='c-Home'> 
    <div className='c-Home__Header'><Header/></div>
    <div  className='c-Home__Container'>
    <div className='c-Home__Navbar'>
     <Navbar/> 
    </div>

    <div className='c-Home__Content'>
         <Router/>
    </div>
    </div>
    
    
    
    </div>

   

   
    </section>
  )
}

export default Home