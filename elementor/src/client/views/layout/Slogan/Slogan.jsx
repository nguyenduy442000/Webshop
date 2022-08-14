import React from 'react'
import "./Slogan.scss"
const Slogan = (props) => {
  const {ismobile}=props;
  return (
    <div >
       <div  className='Slogan'>
    {ismobile ? ( <div>
        <p>Customer support: <span>001-2345-67-89</span></p>
     </div>) : (
      <><div>
              <p>Customer support: <span>001-2345-67-89</span></p>
            </div><div style={{ display: 'flex' }}>
                <div style={{ paddingRight: '30px' }}><p>Free delivery from <span>$50</span></p></div>
                <div><p>Returns extended to <span>60 days</span></p></div>

              </div></>
     )
    }
 

           
       </div>
    
    
    </div>
  )
}

export default Slogan