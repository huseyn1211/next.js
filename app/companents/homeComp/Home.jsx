"use client";
// import React from 'react'
import '../../../styles/home.css'
import Container from '@mui/material/Container';
import MainMenu from '../../atomic/atom/organism/MainMenu'
import Link from 'next/link';
import Img from '../../atomic/atom/Img'
import Button from '../../atomic/atom/Buttons'
import Acardion from '../../companents/homeComp/Acardion'

import React, { useState } from 'react';

import FooterHomeMenu from '../../footerHome/page'
import Quick from '../../atomic/atom/pageAtom/Quick'






const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);
    return (
        <Container >
           <Container> <MainMenu ></MainMenu> </Container>
           {/* <MainMenu ></MainMenu> */}
           <Container>
            <div className='second-section'>
                <Link href="#"><p className='header-word'>Refer 3 friends and get your FREE 'Prepare For Marriage Toolkit'! Click Here To Find Out More!</p></Link>
            </div>
            <Container className='parent-container'>
                <Container className='parent-1'>
                    <Container className='child1'>
                        <Container>
                            <div className='photo-div'>
                                <div className='change-photo-parent'>
                                    <Img src='avatar.jpg'></Img>
                                    <Button className='change-photo'> Change Photo?</Button>
                                </div>
                                <div>
                                    <div className='div-underline'>
                                        <p className='font-user'>username</p>
                                        <p className='font-even'>undertacker</p>
                                    </div>
                                    <div className='div-underline'>
                                        <p className='font-user'>nationality</p>
                                        <p className='font-even'>united kingdom</p>

                                    </div>
                                    <div className='div-underline'>
                                        <p className='font-user'>last log in </p>
                                        <p className='font-even'>1 day ago</p>
                                    </div>

                                </div>
                            </div>
                        </Container>
                        <Container>

                            <Link href='#'><p className='link-container'>Edit my profile</p></Link>
                            <Link href='#'><p className='link-container'> Find my pure mathes</p></Link>
                            <Link href='#'><p className='link-container'>Members i looking for</p></Link>
                            <Link href='#'><p className='link-container'> Members i looking for</p></Link>
                            <Link href='#'><p className='link-container'>Email preserences</p></Link>
                            <Link href='#'><p className='link-container'>Watch out quick start video</p></Link>
                        </Container>
                    </Container>

                    <Container> <p className='warning-div'> WARNING: You currently have limited viewing - <span className='subscribe-div'>subscribe now </span>  to get full access to Pure Matrimony.</p></Container>

                    <Container className='div-still'>
                        <p>Still to do:</p>
                        <Link href='#'> <div className='underline-still'> You have limited access only - Subscribe for full membership</div> </Link>
                        <Link href='#'><div className='underline-still'> Upload a photo</div> </Link>
                    </Container>

                    <Container className='parent-avatar-img'>
                        <p className='div-members-size'>Members who've recently viewed me ...</p>
                        <Link href='#'> <Img className='img-avatar' src='avatar.jpg'></Img>
                        </Link>


                    </Container>
                    <Container className='members-parent'>
                        <p className='members-matrimony'> New members of Pure Matrimony ...</p>
                        <Container className='images-display'>
                            <Link href='#'> <Img className='img-avatar' src='avatar.jpg'></Img> </Link>
                            <Link href='#'> <Img className='img-avatar' src='avatar.jpg'></Img> </Link>
                            <Link href='#'> <Img className='img-avatar' src='avatar.jpg'></Img> </Link>
                            <Link href='#'> <Img className='img-avatar' src='avatar.jpg'></Img> </Link>
                            <Link href='#'> <Img className='img-avatar' src='avatar.jpg'></Img> </Link>


                        </Container>

                    </Container>
                    <Container>
                        <Acardion></Acardion>

                    </Container>


                </Container>
                <div className='child-2'>
                    <Quick />
                </div>

            </Container>
            </Container>
           <Container> <FooterHomeMenu /> </Container>


        </Container>
    )
}

export default Home
