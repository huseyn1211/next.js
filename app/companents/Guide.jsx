import React from 'react'
import '../../styles/guide.css'
import Footer from './Footer'

const Guide = () => {
  return (
    <div>
        <div className='guide-menu'>
          <div className='img-div-guide'> <img src="gonuldenWhite.png" alt="" /></div>
          <div className='right-div-guide'> 
            <div className='guide-blog data'>BLOG</div>
            <div className='guide-member data'>ONLINE MEMBER :1108</div>
            <div className='guide-sign'>SIGN UP</div>
          </div>


        </div>
        <div className='guide-down-menu'>
          <div className='menu-lovely'>Gönülden Sevenler Evlilik Sitesi Rehberi</div>
          <div className='div-parent-div'> <div className='div-child-div'> </div></div>
          
            
            <div className='companent-footer'><Footer/> </div>
           
          
        </div>
        
      
    </div>
  )
}

export default Guide
