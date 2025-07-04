import React from 'react'
import './mainMenu.css'
// import Container from '@mui/material/Container';
import Link from "next/link";
import Button from '../../atom/Buttons'


const Home = () => {
    return (
        <div>
            <div className='parent-div-new' >
                <div className='mobile-site'>
                    <div className='mobile-div'> mobile site</div>
                    <select className="language-select" id="languageSelect">
                        <option value="en">Select Language</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="ru">Русский</option>
                        <option value="zh">中文</option>
                        <option value="ar">العربية</option>
                        <option value="tr">Türkçe</option>
                        <option value="pt">Português</option>
                        <option value="ja">日本語</option>
                    </select>
                </div>
                <div className='main-div'>
                    <div className='head-parent'>
                       <div> <Link href="/newPage"> <img src='logoNew.png'></img></Link> </div>
                        <div>
                            <div className='input-parent-new'>
                                <div className="my-account">
                                    <select className='select-new' id="accountSelect">
                                        <option value="">my account.</option>
                                        <option value="details">My details</option>
                                        <option value="transactions">View transactions</option>
                                        <option value="email">Email preferences</option>
                                        <option value="password">Change password</option>
                                        <option value="phone">Change Phone</option>
                                        <option value="hide">Hide profile</option>
                                        <option value="hidden-members">Members I have hidden</option>
                                        <option value="friend">Tell a Friend</option>
                                        <option value="close">Close my account</option>
                                    </select>
                                </div>
                                <div className='welcome-new'> Welcome Undertacker</div>
                                <button className='logOut-button'> Log Out?</button>
                            </div>
                        </div>
                    </div>
                    <div className='div-menu'>
                        <div className='div-home'>
                            <Link href="/homeFirst"> <div className='div-line div-bg'>Home </div></Link>
                            <Link href='/myProfil'> <div className='div-line'>MyProfile </div></Link>
                            <Link href='/search'><div className='div-line'>Search</div></Link>
                            <Link href='/marriage'><div className='div-line'>Marriage Advice</div>
                            </Link>
                        </div>
                        <div className='div-right-menu'>

                            <p className='div-find'> Find your <span className='div-pure'>Pure Match </span> </p>
                            <Button className='div-subscribe div-line'> Subscribe Now!</Button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Home
