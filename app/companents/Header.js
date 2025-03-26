import React from 'react'
import '../../styles/header.css'



const header = () => {
    return (
        <div className='div-main'>
            <div className='parent-div' >

                <a href='https://www.gonuldensevenler.com/' target='blank'> <img  className='header-img' src='/gonulden sevenler.jpg'  ></img></a>

                <div className='child-div'>
                    <div className='header-english'> <span>  </span> English <span> icon</span></div>
                    <div className='header-login'> LOGIN</div>

                </div>
            </div>
            <div className='parent-second'>
                <div className='div-width'>
                    <div> ONLINE USERS : <b>924 </b></div>
                    <div className='input-parent'>
                        <div className='input-child-div'>
                            <label for="male"> <b> MALE </b></label>
                            <input className='input' type='radio' id='male' name='gender'  ></input>
                        </div>
                        <div className='input-child-div'>
                            <label for="male"> <b>WOMAN </b> </label>
                            <input className='input' type='radio' id='male' name='gender' value='MALE' ></input>
                        </div>
                    </div>
                    <div className='input-nick-parent'>
                        <input className='input-nick' type='text' id='nick' name='name' ></input>
                        <input className='input-nick' type='text' id='nick' name='name' ></input>
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
            <div className='img-parent-div'>
                <a href='https://play.google.com/store/apps/details?id=com.gonuldensevenler.evlilik' target='blank' className='img-child-div'> <img style={{cursor:'pointer'}} src='astore.png'></img> </a>
                <a href='https://apps.apple.com/tr/app/g%C3%B6n%C3%BClden-sevenler-evlilik/id997270377' target='blank' className='img-child-div'><img style={{cursor:'pointer'}} src='gplay.png'></img></a>
            </div>
            <div className='box3-div'>
                <div className='box-parent'>
                    <div className='box-container'>
                        <div>icon</div>
                        <div>
                            <p>19 years</p>
                            <p> <b>5.104.590 </b></p>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='box-container'>
                        <div>icon</div>
                        <div>
                            <p>19 years</p>
                            <p> <b>5.104.590 </b></p>
                            <p>Members</p>
                        </div></div>
                    <div className='box-container'>
                        <div>icon</div>
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

export default header
