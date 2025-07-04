"use client";
import Container from '@mui/material/Container';
import Link from 'next/link';
import Button from '.././Buttons';
import Input from '.././Inputs';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import './quick.css'


const Quick = () => {
    const [isOpen, setIsOpen] = useState(false);
    
        const toggleAccordion = () => setIsOpen(!isOpen);
  return (
    
         <Container className='child2'>
                    <div className='mui-container'>
                        <div className='quick-search-title'>Quick Search</div>
                        <Input className='input-email' label='Email' />




                        <select className='quick-search-select'>
                            <option value=''>Select Country</option>
                            <option value='azerbaijan'>Azerbaijan</option>
                            <option value='turkey'>Turkey</option>
                            <option value='uk'>United Kingdom</option>

                        </select>

                        <div className='quick-search-checkbox'>
                            <input className='input-width' type='checkbox' id='onlineNow' />
                            <label className='input-width' htmlFor='onlineNow'>Online Now</label>
                        </div>

                        <Button className='search-btn'>Search now</Button>
                    </div>


                    <div className='mui-container2'>
                        <div className='icon-parent-photo'> <PhotoCameraIcon /> <Link href='#'><p className='icon-child-photo'>Photo Permissions</p></Link></div>
                        <div className='acardion-icon-parent'> 
                            <div className='acardion-div-main'
                                onClick={toggleAccordion}
                            >
                                <p className='icon-header'>New notifications</p>
                                <KeyboardArrowDownIcon
                                    style={{
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </div>
                            {isOpen && (
                                <div className='acardion-icon-menu'>
                                    <p>  <InfoIcon/> </p>
                                   
                                    <p>No2134 has invited you to view her profile</p>
                                </div>
                            )}
                        </div>
                        <div> 
                            <Link href='#'> <a className='inbox-div'><span className='span-inbox'>s</span> My Inbox</a>   </Link>

                        </div>
                        <div>
                             <p className='fovorit-div'> My favourites</p> 
                             <p className='none-div'>none yet</p>
                        </div>
                        <div className='parent-buttons-last'>
                            <Button className='yellow-div'> Send us your suggestions or report a bug / error </Button>
                            <div className='gap-div'>
                                <Link href='#'> <a className='polls-div'>see prevorius polls</a></Link>  
                                <Button className='about-div-last'> Tell your friends about Pure Matrimony</Button>

                            </div>


                        </div>
                    </div>
                   







                </Container>
      
    
  )
}

export default Quick
