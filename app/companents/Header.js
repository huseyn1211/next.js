 "use client";
import React from 'react'
import '../../styles/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState} from 'react';
// import Link from  "react"





const Header = () => {


    const [open,setOpen]= useState(false)

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
          setOpen(false);
        }
      };


    return (
        <div className='div-main'>
            <div className='parent-div-width'>
            <div className='parent-div' >

                <a href='https://www.gonuldensevenler.com/' target='blank'> <img  className='header-img' src='/gonulden sevenler.jpg'  ></img></a>

                <div className='child-div'>
                    <div className='header-english'>   <FontAwesomeIcon className='icon-america' icon={faEarthAmericas}/> <div>English</div>    <FontAwesomeIcon className='icon-down' icon={faCaretDown}/> </div>
                    <button className='header-login' onClick={() => setOpen(true)}> LOGIN</button>
                
                    {open && (
                        
                       <div className='modal-overlay' onClick={handleOverlayClick}>
                    <div className="modal">   
                    
                          
                        
          <div className="modal-content">
          
            <div className='modal-img-parent'> <img src='gs-dark.png'></img></div>
            <div className='modal-p-parent'> <div className='modal-gonul'>Gönülden Sevenler,</div>
           <div className='modal-help'> is there to help you find your life partner.</div>

</div>
            <div className='modal-input-parent'>   
              
                <input className='modal-input' type='email' placeholder='Email'></input>
                <input className='modal-input'   type='password' placeholder='Password'></input>
                <div className='modal-login'> LOGIN</div>
            </div>
            <a className='modal-forget'> I forgot my password</a>
            <div > 
                <div className='modal-download'> DOWNLOAD THE APPLICATION!</div>
                <div className='nav-img'>
                     <img className='nav-img-child' src='astore.png'></img>
                     <img className='nav-img-child' src='gplay.png'></img>

                </div>
            </div>

          </div>
        </div>
        </div> 
     )}
    

                </div>




                    

            </div>
            </div>
            <div className='parent-second'>
                <div className='div-width'>
                    <div className='users-div'> <div className='green-circle'> </div> ONLINE USERS : <b>924 </b></div>
                    <div className='input-parent'>
                        <div className='input-child-div'>
                            <label htmlFor="male"> <b> MALE </b></label>
                            <input className='input' type='radio' id='male' name='gender'  ></input>
                        </div>
                        <div className='input-child-div'>
                            <label htmlFor="male"> <b>WOMAN </b> </label>
                            <input className='input' type='radio' id='male' name='gender' value='MALE' ></input>
                        </div>
                    </div>
                    <div className='input-nick-parent'>
                        <input className='input-nick' type='text' id='nick' name='name' placeholder='Nick' ></input>
                        <input className='input-nick' type='text' id='nick' name='name' placeholder='E-mail Adress' ></input>
                        <input className='input-nick' type='password' id='nick' name='name' ></input>

                    </div>
                    <div className='header-sign'> SIGN UP NOW</div>
                </div>
                <div className='div-right-header'>
                    <h1 className='div-islamic'> <b>Islamic Matrimonial Site</b>
                    </h1>
                    <p className='div-rightDiv-p'> <b>We are not like other dating apps. </b></p>
                    <p className='div-rightDiv-p2'>
                        Bringing together millions of members seeking a serious relationship,</p>
                    <p className='div-rightDiv-p2'> <b>Gönülden Sevenler </b> witnesses the happiness of more than 1,000 couples every day.</p>
                    <p className='div-rightDiv-p2'><b>
                        You could be next!
                        Join us now! </b>
                    </p>




                </div>
            </div>
            <div className='parent-even'>
            <button className='header-login-even' onClick={() => setOpen(true)}> LOGIN</button>
            <div className='header-sign-even'> SIGN UP NOW</div>
            </div>
            <div className='img-parent-div'>
                <a href='https://apps.apple.com/tr/app/g%C3%B6n%C3%BClden-sevenler-evlilik/id997270377' target='blank' className='img-div-store'><img style={{cursor:'pointer'}} src='gplay.png'></img></a>
                <a href='https://play.google.com/store/apps/details?id=com.gonuldensevenler.evlilik' target='blank' className='img-div-store'> <img style={{cursor:'pointer', }} src='astore.png'></img> </a>
            </div>
            <div className='box3-div'>
                <div className='box-parent'>
                    <div className='box-container'>
                        <div className='img-header-icons'><img src='/peopleIcon.png'></img></div>
                        <div>
                            <p>19 years</p>
                            <p> <b>5.104.590 </b></p>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='box-container'>
                        <div className='img-header-icons'><img src='/ringIcon.png'></img></div>
                        <div>
                            <p>19 years</p>
                            <p> <b>5.104.590 </b></p>
                            <p>Members</p>
                        </div></div>
                    <div className='box-container'>
                        <div className='img-header-icons'><img src='/phoneIcon.png'></img></div>
                        <div>
                            <p>19 years</p>
                            <p> <b>5.104.590 </b></p>
                            <p>Members</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header
