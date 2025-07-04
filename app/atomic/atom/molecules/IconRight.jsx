import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WomanIcon from '@mui/icons-material/Woman';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TextFieldsIcon from '@mui/icons-material/TextFields';







const IconRight = () => {
  return (
    <div>
      <div style={{ borderBottom: '1px solid gray',cursor:'pointer'}}> <MailOutlineIcon style={{color:'gray'}}/> Send message</div>
      <div style={{ borderBottom: '1px solid gray', cursor:'pointer'}} > <PersonOutlineIcon style={{color:'green'}}/> Remove her from my favorites</div>
      <div style={{ borderBottom: '1px solid gray',cursor:'pointer'}}> <WomanIcon/> Ask to exchange photos with her</div>
      <div style={{ borderBottom: '1px solid gray',cursor:'pointer'}}> <ArrowForwardIosIcon /> Invite her to view my profile</div>
      <div style={{ borderBottom: '1px solid gray',cursor:'pointer'}}> <HelpOutlineIcon style={{color:'red'}}/>  Answer her questions</div>
      <div style={{ borderBottom: '1px solid gray',cursor:'pointer'}}> <TextFieldsIcon/> Your notes on her</div>
      
    </div>
  )
}

export default IconRight
