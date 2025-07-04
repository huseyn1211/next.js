'use client'
import React from 'react'
import MainMenu from '../../atomic/atom/organism/MainMenu'
import Container from '@mui/material/Container';
import Link from 'next/link';
import '../../../styles/myProfile.css'
import Quick from '../../atomic/atom/pageAtom/Quick';
import EditIcon from '@mui/icons-material/Edit';
import Button from '../../atomic/atom/Buttons'
import Img from '../../atomic/atom/Img.jsx'
import MouseIcon from '@mui/icons-material/Mouse';

import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FooterHome  from './FooterHome';




const MyProfile = () => {
  return (
    <Container>
       <div> <MainMenu /> </div>  
      <Container className='table-div'>
        <Container className='second-section'>
          <Link href="#"><p className='header-word'>Refer 3 friends and get your FREE 'Prepare For Marriage Toolkit'! Click Here To Find Out More!</p></Link>
        </Container>
        <div className='parent-container'>

          <div className='left-div'>

            <div className='left-div-child-width'>
              <div className='edit'> edit</div>
              <div className='box-parent'>
                <Button className='box'>
                  <EditIcon
                    style={{
                      transform: 'rotate(5deg)',
                      color: 'red',
                      fontSize: '12px'
                    }}
                  />
                  About me</Button>
                <Button className='box'>
                  <EditIcon
                    style={{
                      transform: 'rotate(5deg)',
                      color: 'red',
                      fontSize: '12px'
                    }}
                  />  My Photo</Button>
                <Button className='box'>                <EditIcon
                  style={{
                    transform: 'rotate(5deg)',
                    color: 'red',
                    fontSize: '12px'
                  }}
                />Looking</Button>
                <Button className='box'>                <EditIcon
                  style={{
                    transform: 'rotate(5deg)',
                    color: 'red',
                    fontSize: '12px'
                  }}
                />For Questions</Button>
                <Button className='box'>              <EditIcon
                  style={{
                    transform: 'rotate(5deg)',
                    color: 'red',
                    fontSize: '12px'
                  }}
                /> How important is </Button>
              </div>
              <div className='div-others'>How others see me ...</div>
              <div>
                <p className='user-div'>User Name</p>
                <div className='parent-div-second'>
                  <div className='first-child'>
                    <Img className='img-div-left' src='/avatar.jpg'></Img>
                    <div className='border-div-parent'>
                      <div className='border-div'>
                        <p className='age-div'>Age</p>
                        <p className='country-div'>24</p>
                      </div>
                      <div className='border-div'>
                        <p className='age-div'>Nationality</p>
                        <p className='country-div'>United Kingdom</p>
                      </div>
                      <div className='border-div'>
                        <p className='age-div'>Location</p>
                        <p className='country-div'>Baku Azerbaijan</p>
                      </div>
                      <div className='border-div'>
                        <p className='age-div'>Last logged in:</p>
                        <p className='country-div'>logged in now
                        </p>
                      </div>

                    </div>

                  </div>
                  <div className='second-child'>
                    <div className='table-icon'> <SearchIcon /> <Link href='#'>More like User </Link></div>
                    <div className='table-icon'> <MouseIcon /> <Link href='#'>Send him a message  </Link></div>
                    <div className='table-icon'> <GroupIcon />  <Link href='#'>Add him to my favourites </Link> </div>
                    <div className='table-icon'> <HomeIcon /> <Link href='#'>Invite him to view my profile</Link>  </div>
                    <div className='table-icon'> <SettingsIcon /> <Link href='#'>Your notes on him </Link></div>
                    <div className='table-icon'> <NotificationsIcon /> <Link href='#'>Your history with him </Link></div>
                    <div className='table-icon'> <SearchIcon /><Link href='#'>Don't show me again </Link></div>
                    <div className='table-icon'> <GroupIcon /><Link href='#'>Block him </Link></div>
                  </div>
                </div>




                <div className='div-profil'>Profile</div>
                <div className='lorem-div'> I’m a man in search of a sincere and God-conscious woman to build a halal and meaningful relationship. I have a deep appreciation for art and enjoy expressing myself creatively. I’m a bit introverted by nature, someone who finds peace in quiet moments and thoughtful conversations. I also have a big heart for animals and believe kindness to all of Allah’s creations reflects our inner character. I'm hoping to find someone who shares similar values and is ready to walk this path with sincerity and faith.
                </div>
                <div className='parent-box'>
                  <div className='left-box'>

                    <p className='profile-basics'> Profile Basics</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Profile Posted By:</p>
                        <p className='word'> Self</p>
                      </div>
                      <div className='word-flex'>
                        <p>Residency Status:</p>
                        <p className='word'> Citizen</p>
                      </div>
                      <div className='word-flex'>
                        <p>Are You Willing To Relocate:</p>
                        <p className='word'> Yes</p>
                      </div>
                      <div className='word-flex'>
                        <p>Ethnic Origin:</p>
                        <p className='word'> Turkish</p>
                      </div>
                      <div className='word-flex'>
                        <p>My Religious History:</p>
                        <p className='word'> Revert Muslim</p>
                      </div>
                    </div>

                  </div>
                  <div className='right-box'>

                    <p className='profile-basics'> Lifestyle/Current status</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Pray:</p>
                        <p className='word'> Eid Salah only</p>
                      </div>
                      <div className='word-flex'>
                        <p>Sect:</p>
                        <p className='word'> Sunni Muslim</p>
                      </div>
                      <div className='word-flex'>
                        <p>Marital Status:</p>
                        <p className='word'> Married</p>
                      </div>
                      <div className='word-flex'>
                        <p>Children:</p>
                        <p className='word'> None</p>
                      </div>
                      <div className='word-flex'>
                        <p>Physical Disability:</p>
                        <p className='word'> No</p>
                      </div>
                      <div className='word-flex'>
                        <p>Polygyny?:</p>
                        <p className='word'> No</p>
                      </div>
                      <div className='word-flex'>
                        <p>Languages:</p>
                        <p className='word'>English</p>
                      </div>
                      <div className='word-flex'>
                        <p>Children:</p>
                        <p className='word'> No</p>
                      </div>
                    </div>




                  </div>
                </div>
                <div className='parent-box'>
                  <div className='left-box'>

                    <p className='profile-basics'> Appearance</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Hair Colour:</p>
                        <p className='word'> Medium Brown</p>
                      </div>
                      <div className='word-flex'>
                        <p>Beard:</p>
                        <p className='word'> No</p>
                      </div>
                      <div className='word-flex'>
                        <p>Height:</p>
                        <p className='word'> 6ft 1in - 185cm</p>
                      </div>


                    </div>

                  </div>
                  <div className='right-box'>

                    <p className='profile-basics'> Education/Career</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Profession:</p>
                        <p className='word'>Cost Accountant</p>
                      </div>
                      <div className='word-flex'>
                        <p>Highest Qualification:</p>
                        <p className='word'> GCSE</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='div-profil'>Looking for:</div>
                <div className='lorem-box'>
                  In my search for a life partner, I value compatibility not only in lifestyle but in faith, mindset, and emotional depth. I’m looking for someone sincere, kind-hearted, and emotionally mature — a woman who values peace over drama, truth over pretense, and calmness over chaos.


                  Softness and gentleness in words and actions mean a lot to me, as does the ability to communicate with honesty and respect. I admire someone who carries herself with dignity and compassion, someone who understands that a strong relationship is built on trust, patience, and shared spiritual goals.


                  I hope to find a partner who believes in the importance of growing together — in faith, in love, and in character. A woman who sees marriage not just as a union, but as a journey toward something higher, with Allah at the center. If you are someone who values sincerity, loyalty, and inner peace, then perhaps our paths are meant to cross.


                </div>
                <div className='box-background'>
                  <div className='bg-child'>
                    <p className='looking-div'>Looking in</p>
                    <div className='old-div'> Azerbaijan, Barbados, Cook Islands, Brazil
                    </div>
                  </div>
                  <div className='bg-child2'>
                    <p className='looking-div'> Age</p>
                    <div className='old-div'>From 24 to 36 years old</div>
                  </div>

                </div>
                <div className='parent-box'>
                  <div className='left-box'>

                    <p className='profile-basics'> Profile Basics</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Profile Posted By:</p>
                        <p className='word'> Self</p>
                      </div>
                      <div className='word-flex'>
                        <p>Residency Status:</p>
                        <p className='word'> Citizen</p>
                      </div>
                      <div className='word-flex'>
                        <p>Are You Willing To Relocate:</p>
                        <p className='word'> Yes</p>
                      </div>
                      <div className='word-flex'>
                        <p>Ethnic Origin:</p>
                        <p className='word'> Turkish</p>
                      </div>
                      <div className='word-flex'>
                        <p>My Religious History:</p>
                        <p className='word'> Revert Muslim</p>
                      </div>
                    </div>

                  </div>
                  <div className='right-box'>

                    <p className='profile-basics'> Lifestyle/Current status</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Pray:</p>
                        <p className='word'> Eid Salah only</p>
                      </div>
                      <div className='word-flex'>
                        <p>Sect:</p>
                        <p className='word'> Sunni Muslim</p>
                      </div>
                      <div className='word-flex'>
                        <p>Marital Status:</p>
                        <p className='word'> Married</p>
                      </div>
                      <div className='word-flex'>
                        <p>Children:</p>
                        <p className='word'> None</p>
                      </div>
                      <div className='word-flex'>
                        <p>Physical Disability:</p>
                        <p className='word'> No</p>
                      </div>
                      <div className='word-flex'>
                        <p>Polygyny?:</p>
                        <p className='word'> No</p>
                      </div>
                      <div className='word-flex'>
                        <p>Languages:</p>
                        <p className='word'>English</p>
                      </div>
                      <div className='word-flex'>
                        <p>Children:</p>
                        <p className='word'> No</p>
                      </div>
                    </div>



                  </div>
                </div>
                  <div className='parent-box'>
                  <div className='left-box'>

                    <p className='profile-basics'> Appearance</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Hair Colour:</p>
                        <p className='word'> Medium Brown</p>
                      </div>
                      <div className='word-flex'>
                        <p>Beard:</p>
                        <p className='word'> No</p>
                      </div>
                      <div className='word-flex'>
                        <p>Height:</p>
                        <p className='word'> 6ft 1in - 185cm</p>
                      </div>


                    </div>

                  </div>
                  <div className='right-box'>

                    <p className='profile-basics'> Education/Career</p>
                    <div className='left-box-child'>
                      <div className='word-flex'>
                        <p>Profession:</p>
                        <p className='word'>Cost Accountant</p>
                      </div>
                      <div className='word-flex'>
                        <p>Highest Qualification:</p>
                        <p className='word'> GCSE</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right-div'><Quick /></div>
        </div>
       <div className='back-to-top'><Link href='#'>-BACK TO TOP-</Link></div>
      </Container>
      <div><FooterHome /></div>


    </Container>
  )
}

export default MyProfile
