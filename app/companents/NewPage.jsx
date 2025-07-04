import React from 'react'
import '../../styles/newPage.css'
import Container from '@mui/material/Container';
import Link from "next/link";
import MainMenu from '../atomic/atom/organism/MainMenu'
import FooterHome from './homeComp/FooterHome';


const NewPage = () => {
    return (
        <Container>
            <div className='parent-div-new' >
             
                  <div className='mainMenu-parent'><MainMenu></MainMenu></div>  
                <div className='main-div'>
                  
                    
                    <div className='second-section'>
                        <div className='div-matrushka'>
                            <div className='box-parent'>
                                <div className='box1 box0'>
                                    <p className='step-div'>Step:1</p>
                                    <p>Basic Detalis</p>
                                </div>
                                <div className='box2 box0'>
                                    <p className='step-div'>Step:2</p>
                                    <p>Looking for</p>
                                </div>
                                <div className='box3 box0'>
                                    <p className='step-div'>Step:3</p>
                                    <p>About me</p>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                            <div className='div-bg-blue'>
                                <p className='blue-p'> Basic Details</p>
                                <p className='blue-p2'> Follow these easy steps to fill in your profile. This will help you make the best use of Pure Matrimony.</p>
                            </div>
                            <div className='div-inputs-parent'>
                                <div className='first-line'>
                                    <div className='describe-div'> Describe yourself</div>
                                    <div className='right-parent-div'>
                                        <p className='div-size'>
                                            Use three words to best describe yourself, which will be shown to others.
                                        </p>
                                        <div className='input-flex'>
                                            <div className="input-group">
                                                <label>1.</label>
                                                <input type="text" placeholder="" />
                                            </div>

                                            <div className="input-group">
                                                <label>2.</label>
                                                <input type="text" placeholder="" />
                                            </div>

                                            <div className="input-group">
                                                <label>3.</label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <p className='div-size'> Be creative to help find your Pure match</p>

                                    </div>
                                </div>
                                <div className='second-line'>
                                    <p className='describe-div'>Availability status</p>
                                    <div className='rather-parent'>
                                        <select className='select-input'>
                                            <option value="">rather not say</option>
                                            <option value="cmnc">
                                                I am currently available for communication
                                            </option>
                                            <option value="not">I am currently not available for communication</option>
                                            <option value="member">I am currently meeting another member</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='three-line-parent'>
                                    <div className='three-line'>
                                        <p className='describe-div'>Country</p>
                                        <div className='select-width'>
                                            <select className='select-input'>
                                                <option value="az">Azerbaijan</option>
                                                <option value="tr"> Turkey</option>
                                                <option value="alb">Albania</option>
                                                <option value="fr">France</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='div-town '>
                                        <p className='describe-div'>Town/City</p>
                                        <div className='select-width'> <select className='select-input'>
                                            <option value="az"></option>
                                            <option value="tr"> Sebail</option>
                                            <option value="alb">Xetai</option>
                                            <option value="fr">Sabunchu</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className='second-line' >
                                    <p className='describe-div'> Languages spoken</p>
                                    <select className="select-input">
                                        <option value="az">English</option>
                                        <option value="tr">Turkey</option>
                                        <option value="alb">Albania</option>
                                        <option value="fr">France</option>
                                        <option value="us">USA</option>
                                        <option value="de">Germany</option>
                                        <option value="it">Italy</option>
                                        <option value="es">Spain</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="cn">China</option>
                                        <option value="jp">Japan</option>
                                        <option value="ca">Canada</option>
                                        <option value="au">Australia</option>
                                        <option value="ru">Russia</option>
                                        <option value="kr">South Korea</option>
                                        <option value="in">India</option>
                                        <option value="br">Brazil</option>
                                        <option value="ua">Ukraine</option>
                                        <option value="pl">Poland</option>
                                        <option value="se">Sweden</option>
                                    </select>
                                </div>
                                <div>
                                    <div className='second-line '>
                                        <p className='describe-div'>Profile Created By</p>
                                        <div className='select-width'> <select className='select-input'>
                                            <option value="Self">Self</option>
                                            <option value="parent"> Parent</option>
                                            <option value="br/sis">Brother/Sister</option>
                                            <option value="fmly">Family</option>
                                            <option value="csn">cousin</option>
                                            <option value="frnd">Friend</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div>
                                    <div className='second-line '>
                                        <p className='describe-div'>Residency Status</p>
                                        <div className='select-width'> <select className='select-input'>
                                            <option value="Citizen">Citizen</option>
                                            <option value="Permanent"> Permanent Residence</option>
                                            <option value="student-visa">Student Visa</option>
                                            <option value="Other">Other</option>
                                            <option value="wrk-prmt">Work Permit</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div>
                                    <div className='second-line '>
                                        <p className='describe-div'>Religious History?</p>
                                        <div className='select-width'>
                                            <select className='select-input'>
                                                <option value="Citizen">Muslim Since Birth</option>
                                                <option value="Permanent"> Revert Muslim</option>
                                            </select></div>
                                    </div>
                                    <div>
                                        <div className='second-line '>
                                            <p className='describe-div'>What Sect are you?</p>
                                            <div className='select-width'>
                                                <select className='select-input'>
                                                    <option value="sunni">Sunni Muslim</option>
                                                    <option value="shia"> Shia Muslim</option>
                                                    <option value="jusr"> Just a Muslim</option>
                                                </select></div>
                                        </div>

                                    </div>
                                    <div>
                                        <div className='second-line '>
                                            <p className='describe-div'>Marital Status</p>
                                            <div className='select-width'>
                                                <select className='select-input'>
                                                    <option value="never">Never married</option>
                                                    <option value="married"> Married</option>
                                                    <option value="divorced"> Divorced</option>
                                                    <option value="annulled"> Annulled</option>
                                                </select></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='second-line '>
                                            <p className='describe-div'>Polygyny?</p>
                                            <div className='select-width'>
                                                <select className='select-input'>
                                                    <option value="yes">Yes</option>
                                                    <option value="no"> No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='second-line '>
                                            <p className='describe-div'>Do you keep a Beard?</p>
                                            <div className='select-width'>
                                                <select className='select-input'>
                                                    <option value="yes">Yes</option>
                                                    <option value="no"> No</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className='last-button'>
                                <button className='button-next'>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><FooterHome/></div>
        </Container>
    )
}

export default NewPage
