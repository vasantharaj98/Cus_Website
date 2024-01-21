import React from 'react';
import './Footer.css'
import { Typography } from '@mui/material';

const Footer = () => {

  return (
    <div className='footer'>
      <Typography sx={{textAlign:'center'}}>
      <small>Powered by</small> <a href="https://www.nexarcit.com" target='_blank' rel="noreferrer" style={{fontWeight: 'bold', textDecoration:'none', color:'#000'}}>NexArc Information Technology</a>
      </Typography>
    </div>
  )
}

export default Footer