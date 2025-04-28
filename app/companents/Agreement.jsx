import React from 'react'
import "../../styles/agree.css"
import Footer from './Footer'

const Agreement = () => {
  return (
    <div>
      <div className='div-parent-main'>
      <div className='div-header-agree'>
        <div className='agree-img'><img src='/gonuldenWhite.png'></img></div> 
        <div className='div-member'> 
            <div className='blog-agree'>BLOG</div>
            <div className='blog-agree'> ONLINE MEMBER : 1110</div>
            <div className='div-agree-sign'>SIGN UP</div>


        </div>

      </div>
      </div>

      <div className='text-parent-agree'>
        <div className='head-paragraf-agree'> Confidentiality Agreement</div>
        <div className='texts'>
            <div className='text-centence'>                    While becoming a member of our site, our members do not provide any identity information. The distribution, publication and disclosure of this information cannot be mentioned by our site.</div>
            <div className='text-centence'> 
            The email address provided during registration on our site is kept confidential from 3rd parties and is never shared with other members.</div>
            <div className='text-centence'>                The credit card information of our members who upgrade their membership to gold membership is kept strictly confidential. At the same time, our site does not collect automatic payments from its members using this information.</div>
            <div className='text-centence' style={{border:'none'}}> 
            Articles, profile posts, poems written and pictures published by our members on our site cannot be published without permission from our site.</div>
        </div>


      </div>
      <Footer/>
     

    </div>
  )
}

export default Agreement
