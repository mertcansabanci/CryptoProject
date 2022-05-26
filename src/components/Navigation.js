import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navigation.css'

const Navigation = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)



  return (
    <div className='nav'>
        <div className='container'>
            <h1>Pay<span className='primary'>Back</span></h1>
            <ul className={click ? 'navbar active' : 'navbar'}>
                <li>
                    <a href='./'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-pwr'>
                <button to='SignUp' className='btn'>Connect Wallet</button>
            </div>
            <div className='slide-menu' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#111'}}/>) : (<FaBars size={20} style={{color: '#111'}}/>)}                
            </div>
        </div>

    </div>
  )
}

export default Navigation