import React from 'react'
import './Section.css'
import Crypto from '../images/section_img.jpeg'


const Section = () => {
  return (
    <div className='section'>
        <div className='container'>
            {/* left side */}
            <div className='left_side'>
                <img src={Crypto} alt = '' />
            </div>

            {/* right side */}
            <div className='right_side' >
                <h2>Earn passive income with crypto</h2>
                <p>Earn up to %14 annual rewards on 25+ digital assets.Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                <div className='input_container'>
                    <input type= 'email' placeholder='Enter your email' />
                    <button className='btn'>Learn More </button>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Section