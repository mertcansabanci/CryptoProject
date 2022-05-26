import React from 'react'
import './Main.css'
import Image from '../images/main_img.jpeg'

const Main = () => {
  return (  
     <div className='main'>
        <div className='container'>
             {/* Left Column */}
             <div className='left_column'>
                <p>Buy & Sell Crypto 24/7 using your PayBack account</p>
                <h1>You are one step away from the crypto world</h1>
                <p>Buy, Sell and store hundreds of Cryptocurrencies</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email'/>
                    <button className='btn'>Learn More</button>
                </div>
            </div> 
    

            {/* Right Column */} 
            <div className='right_column'>
                <div className='img-container'>
                    <img src={Image} alt=''/>
                </div>
            </div>
        </div>

    </div> 
 
  )
}

export default Main