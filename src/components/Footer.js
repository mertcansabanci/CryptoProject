import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='column'>
                <h1>Pay<span className='primary'>Back</span></h1>
            </div>
            <div className='column_one'>
                <h5>Support</h5>
                <span className='bar'></span>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Chat</a>
                    <a href='/'>Help Center</a>
                    <a href='/'>FAQ</a>
                
            </div>
            <div className='column_one'>
                <h5>Developers</h5>
                <span className='bar'></span>
                    <a href='/'>Cloud</a>
                    <a href='/'>Commerce</a>
                    <a href='/'>Pro</a>
                    <a href='/'>API</a>                
            </div>
            <div className='column_one'>
                <h5>Company</h5>
                <span className='bar'></span>
                    <a href='/'>About</a>
                    <a href='/'>Information</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Privacy</a>
               
            </div>
            <div className='column_one'>
                <h5>Social</h5>
                <span className='bar'></span>
                    <a href='/'><FaFacebook className='icons'/></a>
                    <a href='/'><FaGithub className='icons'/></a>
                    <a href='/'><FaLinkedin className='icons'/></a>
                    <a href='/'><FaTwitter className='icons'/></a>                
            </div>
        </div>
    </div>
  )
}

export default Footer